import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ISTJBlogs() {
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
                    Introduction to the ISTJ Personality (The Logistician)
                  </h1>

                  <p className="text-black text-lg text-justify">
                    ISTJ personality types, commonly referred to as "The
                    Logistician," are characterized by a strong work ethic, a
                    practical mindset, and a preference for structure. These
                    people are very trustworthy in both personal and
                    professional contexts because they are logical,
                    detail-oriented, and introverted. They take their
                    commitments seriously, respect tradition, and carefully
                    abide by the law. Even though they might not be
                    attention-seekers, their commitment keeps communities,
                    workplaces, and families stable and in order.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    What Is an ISTJ Personality Type?
                  </h2>
                  <p className="text-black text-lg mt-6">
                    ISTJ, which stands for Introverted, Sensing, Thinking, and
                    Judging, is one of the 16 Myers-Briggs personality types.
                    ISTJs are driven by solitude, prefer structured, ordered
                    environments, make logical decisions, and concentrate on
                    facts rather than abstract concepts. ISTJs are dedicated to
                    doing tasks correctly and upholding order, and they are
                    frequently referred to as "Inspectors" for their acute
                    attention to detail. They perform best in positions
                    requiring accuracy, accountability, and conformity to
                    regulations. They respect teamwork when it serves a clear
                    purpose, even though they prefer to work alone.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    ISTJ-A (Assertive Logistician):
                  </h2>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl">
                      <b>onfidence and Resilience:</b>
                      <br />
                      Assertive logisticians are typically confident and capable
                      of managing stress. They are less prone to self-doubt and
                      remain composed in trying circumstances.
                    </li>
                    <li className="mt-4 text-xl">
                      <b>Independence from External Validation:</b>
                      <br />
                      People who belong to this subtype are less affected by the
                      perceptions and failures of others. They rely on their
                      inner self-assurance to tenaciously pursue their
                      objectives.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4">
                    ISTJ-T (Turbulent Logistician):
                  </h2>

                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4 text-xl">
                      <b>Detail-Oriented and Self-Reflective: </b>
                      <br />
                      Turbulent logisticians are more likely to examine
                      themselves and may be sensitive to their perceived flaws.
                      They are frequently motivated to work hard and pay
                      attention to details in order to meet their high standards
                      by this introspection.
                    </li>
                    <li className="mt-4 text-xl">
                      <b>Responsiveness to Feedback: </b>
                      <br />
                      This subtype is more open to receiving input from others
                      and is prepared to modify their plans as necessary.
                      Although this flexibility can be advantageous, it could
                      also increase their vulnerability to stress and
                      self-doubt.
                    </li>
                  </ul>
                  <h2 className="text-2xl font-bold mb-4">
                    ISTJ Personality Development & “Function Stack”
                  </h2>

                  <p className="text-black text-lg mt-6">
                    Every personality type favors using four of the eight
                    functions that Jung initially outlined. The "function stack"
                    of a type is made up of these four functions. The terms
                    dominant, auxiliary, tertiary, and inferior are used to
                    describe the relative strength of preference for these four
                    functions. Si is the top choice for ISTJs, followed by Te,
                    Fi, and Ne in that order. The configuration of their
                    function stack illustrates this.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">
                    ISTJ Function Stack
                  </h2>
                  <div className="w-full text-center border-2 border-black p-4">
                    <h2 className="text-2xl font-bold mb-2">
                      Dominant: Introverted Sensing (Si)
                    </h2>
                    <h2 className="text-2xl font-bold mb-2">
                      Auxiliary: Extraverted Thinking (Te)
                    </h2>
                    <h2 className="text-2xl font-bold mb-2">
                      Tertiary: Introverted Feeling (Fi)
                    </h2>
                    <h2 className="text-2xl font-bold mb-2">
                      Inferior: Extraverted Intuition (Ne)
                    </h2>
                  </div>
                  <p className="text-black text-lg mt-6">
                    There are three main stages in the type development of
                    ISTJs. Si is the first function to blossom, followed by Te,
                    and so on. These stages roughly match the function stack's
                    ordering. However, as we shall see, the inferior function is
                    somewhat of an exception, drawing ISTJs' attention earlier
                    than might be anticipated.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 mt-4">
                    Phase I: Early Life and Growth
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Their primary function, Introverted Sensing (Si), develops
                    and gains strength during Phase I. ISTJs utilize their Si to
                    take in, process, and consider new knowledge and life
                    experiences. The auxiliary function Extraverted Thinking
                    (Te), which can be a useful extraverted tool for navigating
                    and managing the outside world, may also exhibit some
                    development in phase I ISTJs.
                  </p>

                  <h2 className="text-2xl font-bold mt-6">
                    Phase II: From Adolescence to Adulthood (Teens to 30s)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    The epic struggle between the dominant and inferior does not
                    emerge until Phase II, even though the inferior function is
                    not completely dormant or inert in Phase I. Extraverted
                    Intuition (Ne), the inferior function of ISTJs, starts to
                    take center stage and assert itself once their dominant Si
                    reaches a particular threshold of strength and dominance.
                    Since Ne is not the next in line in the ISTJs' function
                    stack, this can be a little confusing, but it can be
                    explained by the fact that it has a bipolar relationship
                    with their dominant Si. Additionally, phase II ISTJs exhibit
                    growing Te usage and development, and they might even start
                    to use their tertiary function, Introverted Feeling (Fi).
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    Phase III: Life’s Later Chapters: 30s, 40s, and Beyond
                  </h2>
                  <p className="text-black text-lg mt-4">
                    If they are lucky enough to transition into Phase III, ISTJs
                    grow more conscious of their inferior Ne's sneaky tactics.
                    They experience more balance between their Si and Ne, as
                    well as a growing sense of peace and wholeness, as they
                    learn to function more healthily as ISTJs and become more
                    conscious of their inferior.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">
                    ISTJs’ Dominant Function: Introverted Sensing
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Introverted Sensing (Si) is the primary function of ISTJs.
                    Si types (i.e. e. SJs) differ significantly from Se types
                    (i.e. e. SPs). . ISTJs do not seek out sensations like SPs
                    do. They don't usually go out in search of new experiences,
                    sensations, or tangible possessions. Rather, they usually
                    favor a more steady and stable way of life.
                  </p>

                  <p className="text-black text-lg mt-4">
                    The tendency of ISTJs to act as tradition keepers is
                    supported by Si. Si is a Perceiving function, so ISTJs are
                    less likely than ESJs to act as frontline advocates for
                    their values or beliefs. ISTJs would much rather take the
                    time to think back on their beloved customs and the past.
                    Studying religious texts or going to services are enjoyable
                    activities for many people that reinforce and deepen their
                    Si beliefs.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Si's involvement in physiological sensation is another
                    characteristic. Specifically, it keeps an eye on internal
                    body affairs and makes sure that needs are met. ISTJs may be
                    more sensitive to specific sensory stimuli because Si is an
                    introverted function that is more intense than Se. They
                    might be extremely sensitive to noise levels, lighting,
                    temperature, and other factors. When they are hungry, sleep
                    deprived, or otherwise physically uncomfortable, this can
                    make them more irritable than other types. They may choose
                    to eat a more boring or conventional diet as a result of
                    their sensitivity to strong or unusual flavors and textures.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Si and Ni, its perceptive cousin, can also be compared. Both
                    can be thought of as having a largely passive role in
                    perceiving. Since SJs and NJs can both come across as
                    obstinate, narrow-minded, or opinionated, both can also be
                    linked to conviction strength. Ni is a synthesizing
                    function, combining disparate pieces of information to
                    create its own impressions or interpretations. This is the
                    main distinction between these two functions. Si, on the
                    other hand, does not perceive a reality distinct from the
                    immediate sense data. Rather, it contrasts recent
                    experiences with those from the past. Every experience is
                    fresh and interpreted differently for Ni. Si believes that
                    when interpreting the present, the past is more important.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Other types may find it simple to criticize ISTJs for their
                    conservative views, but we shouldn't undervalue or ignore
                    their contributions. By reminding us of our past
                    experiences, ISTJs can help us avoid making the same
                    mistakes twice. Additionally, their Si acts as a vital
                    cultural counterbalance to Se by serving as a reminder that
                    material resources are finite and ought to be managed with
                    caution.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">
                    ISTJs’ Auxiliary Function: Extraverted Thinking
                  </h2>
                  <p className="text-black text-lg mt-4">
                    For ISTJs, extraverted thinking (Te) is an auxiliary
                    function. It supports their propensity to publicly voice
                    their opinions and judgments. Through their Te, ISTJs have a
                    propensity to "think out loud," which can be both a strength
                    and a weakness. On the one hand, ISTJs can become powerful
                    and successful managers or teachers thanks to their Te.
                    However, it can also make them appear harsh, rigid, or
                    domineering. ISTJs are prone to overstating things or saying
                    things that they later wish they could take back or at least
                    soften, just like other Judging types.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Te is not focused on maintaining social harmony like
                    Extraverted Feeling is. It is less sensitive to the feelings
                    of others and less personal. As a result, people may think
                    that ISTJs lack tact or empathy because of their preference
                    for Te.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Bringing order, control, and rationality to external systems
                    and operations is another goal of Te. An unchecked Te could
                    be seen as the parent of the modern world, which is marked
                    by a snowballing of bureaucracy and "red tape." Te and Si
                    combine to make ISTJs ideal for jobs requiring meticulous
                    attention to detail, protocols, and procedures, such as
                    clerical and administrative work. ISTJs find highly
                    structured work environments comforting because they
                    understand their role and what to expect from the defined
                    structure, whereas other types may find them off-putting.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">
                    ISTJs’ Tertiary Function: Introverted Feeling
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ISTJs have a tertiary function called Introverted Feeling
                    (Fi). Being an introverted function, Fi entails analyzing
                    and focusing inwardly on one's own values and emotions. IFPs
                    are literally the most "self-focused" (in a neutral sense)
                    of all the types when it comes to their concern for
                    autonomously examining and controlling their emotions and
                    values. They use Fi as their dominant function. In contrast,
                    ISTJs' Fi is much less conscious, so they don't always have
                    easy access to their own feelings.
                  </p>

                  <p className="text-black text-lg mt-4">
                    IFPs are given a strong sense of inner self-control by Fi,
                    an inner judging function. They do not, however, have the
                    same level of inner control because ISTJs' Fi is in the
                    tertiary position. They, like other TJ types, concentrate
                    more on using their Te to influence or control the outside
                    world as a form of compensation.
                  </p>

                  <p className="text-black text-lg mt-4">
                    The direction of Fi is one of its more crucial
                    characteristics. Specifically, because ISTJs are
                    introverted, they frequently prevent others from feeling
                    their emotions. The fact that Fi is below Te in their
                    function stack makes this worse. As a result, one may
                    occasionally come across as emotionless, distant, or cold.
                  </p>

                  <p className="text-black text-lg mt-4">
                    ISTJs start to pay closer attention to their own feelings
                    and values as well as those of others as they connect with
                    their Fi. hey start to see the value of subjective concerns
                    and realize that truth or value can also include personal
                    preferences (Fi) rather than just being determined by
                    external standards (Te) or historical precedent (Si). Even
                    with people on the opposite end of the political or
                    religious spectrum, ISTJs can develop greater empathy and
                    understanding by opening up to their Fi.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">
                    ISTJs’ Inferior Function: Extraverted Intuition
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Like other types, ISTJs may be oblivious to how much their
                    inferior function influences their choices and actions.
                    ISTJs are prone to making poor decisions if they are not
                    sufficiently aware of and integrated with their inferior. As
                    a result, ISTJs who want to improve themselves must try to
                    comprehend how their personality displays Extraverted
                    Intuition (Ne), their inferior function.
                  </p>

                  <p className="text-black text-lg mt-4">
                    In addition to seeing all the different options and
                    possibilities, Ne is concerned with coming up with and
                    connecting ideas. It is a highly divergent and unpredictable
                    function that is prone to seeing associations and
                    connections everywhere. For this reason, Ne types are
                    frequently thought of as oddball and unorthodox creatives.
                    There are many ways that Ne can show up in the personality
                    of an ISTJ, despite the fact that they tend to be more
                    conservative and routine.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Making predictions or speculating in various ways is one way
                    ISTJs can indulge their Ne. Gossip is one of the most
                    popular ways ISTJs accomplish this. They give their Ne an
                    ego boost by putting forth theories about different
                    individuals or events. They also take pleasure in spreading
                    different political or religious ideologies.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Word or math games are among the pastimes that ISTJs use to
                    express their Ne. A lot of ISTJs that I know like solving
                    puzzles like Sudoku, crosswords, and others. They can use Te
                    strategies, practice Si recall, form associations, and
                    explore possibilities through these kinds of activities
                    (Ne). Additionally, a lot of ISTJs like a range of crafts
                    that let them use their Ne creatively.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Finding innovative ways to instruct others is another way
                    that ISTJs use their Ne. ISTJs may be drawn to teaching for
                    other reasons besides their desire to teach Si-Te material,
                    such as making innovative use of their Ne.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Similar to other types, ISTJs do not directly use or develop
                    their inferior function in order to integrate. Instead, it
                    is preferable for ISTJs to let their Ne stay unconscious and
                    operate in the background in a passive manner. Integrating
                    ISTJs do what ISTJs do best—they devote their time and
                    energy to Si and Te, believing that everything else will
                    work itself out in due time—instead of attempting to acquire
                    or exhibit greater foresight, cunning, or creativity.
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
                            ISTJ Strengths
                          </th>
                          <th className="p-3 text-lg font-bold text-black text-center">
                            ISTJ Weaknesses
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="p-3 text-black">Honest and Direct</td>
                          <td className="p-3 text-black">
                            Stubborn and Inflexible
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">Highly Responsible</td>
                          <td className="p-3 text-black">
                            Insensitive at Times
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Organized and Efficient Overly Rigid
                          </td>
                          <td className="p-3 text-black">Overly Rigid</td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">Detail-Oriented</td>
                          <td className="p-3 text-black">Judgmental</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Loyal and Dependable
                          </td>
                          <td className="p-3 text-black">
                            Self-Critical and Prone to Guilt
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            Perseverant and Hardworking
                          </td>
                          <td className="p-3 text-black">
                            Workaholic Tendencies
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h1 className="text-3xl font-bold mt-8 mb-2">
                    ISTJ Strengths
                  </h1>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Honest and Direct
                  </h2>
                  <p className="text-black text-lg mb-4">
                    Honesty is important to ISTJs, and they detest manipulation
                    or deceit. They are dependable and trustworthy because they
                    value straightforward, factual communication and demand it
                    from others.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    2. Highly Responsible
                  </h2>
                  <p className="text-black text-lg">
                    ISTJs are dedicated to finishing what they set their minds
                    to. In both personal and professional contexts, they are
                    trustworthy because they rarely fail to fulfill their
                    commitments
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    3. Organized and Efficient
                  </h2>
                  <p className="text-black text-lg">
                    ISTJs value organization and structure. They are excellent
                    at organizing, creating schedules, and adhering to
                    procedures, which enables them to manage their workload and
                    prevent chaos.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    4. Detail-Oriented
                  </h2>
                  <p className="text-black text-lg">
                    ISTJs are meticulous with data, facts, and minutiae. They
                    excel at tasks requiring accuracy and thoroughness because
                    of their capacity to identify mistakes and guarantee
                    accuracy.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    5. Loyal and Dependable
                  </h2>
                  <p className="text-black text-lg">
                    ISTJs are steadfast in their loyalty, whether it be in
                    friendships, family ties, or professional relationships.
                    They think it's important to keep your word and help the
                    people you care about.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    6. Perseverant and Hardworking
                  </h2>
                  <p className="text-black text-lg">
                    An ISTJ is not a person who gives up easily. They overcome
                    challenges with tenacity, maintaining focus on their
                    objectives in the face of setbacks.
                  </p>

                  <h1 className="text-3xl font-bold mt-8 mb-2">
                    ISTJ Weaknesses
                  </h1>
                  <h2 className="text-2xl font-bold mb-4">
                    1. Stubborn and Inflexible
                  </h2>
                  <p className="text-black text-lg mb-4">
                    ISTJs are resistant to change and favor tried-and-true
                    approaches. They may be resistant to new ideas or different
                    methods because of their strong belief in customs and rules.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    2. Insensitive at Times
                  </h2>
                  <p className="text-black text-lg">
                    Times ISTJs favor reason over feelings, which can make them
                    seem harsh or direct. They may inadvertently offend or cause
                    harm to others because they prioritize facts over emotions.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">3. Overly Rigid</h2>
                  <p className="text-black text-lg">
                    ISTJs may find unpredictable situations uncomfortable
                    because they prefer structure and order. They might find it
                    difficult to adjust to impromptu plans or ambiguous
                    expectations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">4. Judgmental</h2>
                  <p className="text-black text-lg">
                    They hold themselves to a high standard and anticipate that
                    others will do the same using reason and evidence. For
                    ISTJs, people who rely on feelings or presumptions rather
                    than facts may be viewed as illogical or misinformed.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    5. Self-Critical and Prone to Guilt
                  </h2>
                  <p className="text-black text-lg">
                    When something goes wrong, ISTJs tend to blame themselves
                    because they take their responsibilities seriously. Even
                    when they are not at fault, they might obsess over their
                    errors and feel bad about them.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">
                    6. Workaholic Tendencies
                  </h2>
                  <p className="text-black text-lg">
                    Their intense sense of obligation can cause them to overwork
                    and prioritize obligations over their own health. This may
                    lead to burnout, stress, and trouble juggling work and
                    personal obligations.
                  </p>
                </section>
              )}

              {/* Romantic Relationships Section */}
              {activeSection === "romantic-relationships" && (
                <section id="romantic-relationships">
                  <h1 className="text-3xl font-bold mb-2">
                    Relationships of ISTJ
                  </h1>
                  <h2 className="text-2xl font-bold mb-2">
                    Romantic relationships
                  </h2>
                  <p className="text-black text-lg mt-6">
                    ISTJs appreciate stability and long-term commitment, making
                    them trustworthy and devoted partners. They favor
                    conventional dating methods over impromptu or erratic
                    meetings, such as meeting through shared connections or
                    comfortable surroundings. They look for partners who are
                    willing to accept their regimented lifestyle and who share
                    their values.
                  </p>

                  <p className="text-black text-lg mt-6">
                    When it comes to relationships, ISTJs are very committed and
                    responsible. They work hard to uphold a secure home and
                    carry out their responsibilities as partners. On the other
                    hand, they might find it difficult to express their emotions
                    and anticipate that their partners will do so. Because of
                    their rational disposition, they occasionally prioritize
                    duties and facts over feelings. Although this is the case,
                    ISTJs are devoted and diligent in maintaining a safe and
                    healthy relationship.
                  </p>
                </section>
              )}

              {/* Friendships Section */}
              {activeSection === "friendships" && (
                <section id="friendships">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Friendships</h2>

                  <p className="text-black text-lg mt-4">
                    Deep, lasting relationships are preferred over passing
                    acquaintances by ISTJs, who are trustworthy and loyal
                    friends. They choose their companions carefully, and they
                    usually base their bonds on similar ideals. Although they
                    don't express their feelings very much, they demonstrate
                    their dedication by their deeds rather than their words.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Friendship stability is preferred by ISTJs, who steer clear
                    of pointless arguments. Rather than engaging in idle
                    chatter, they prefer to discuss work, current events, and
                    practical issues. They can also value the traits of more
                    creative or impulsive people, even though they typically
                    make friends with people who share their opinions. These
                    friendships are frequently founded on respect for one
                    another rather than common interests, and ISTJs are
                    dependable while appreciating their friends' inventiveness.
                  </p>
                </section>
              )}

              {/* Parenthood Section */}
              {activeSection === "parenthood" && (
                <section id="parenthood">
                  <h1 className="text-3xl font-bold mb-2">Parenthood</h1>

                  <p className="text-black text-lg mt-4">
                    ISTJ parents are disciplined, organized, and dedicated to
                    bringing up responsible kids. They place a strong emphasis
                    on conventional virtues like deference, diligence, and
                    obedience. Their firm yet equitable parenting ensures that
                    their kids develop a strong sense of responsibility and
                    order as they grow up.
                  </p>
                  <p className="text-black text-lg mt-4">
                    These parents put their kids' long-term welfare first by
                    creating environments that are steady and orderly. They
                    might, however, have trouble feeling warm because they show
                    love by enforcing rules and providing for basic needs rather
                    than by making loving gestures. Their high standards can
                    occasionally cause a rift with their kids, particularly if
                    their emotional needs are not met. In order to foster closer
                    relationships, ISTJ parents might need to strike a balance
                    between empathy and structure, giving their kids the freedom
                    to express their emotions while upholding their fundamental
                    principles of responsibility and discipline.
                  </p>

                  <h1 className="text-2xl font-bold mb-2">
                    Career Preferences for ISTJs
                  </h1>
                  <p className="text-black text-lg mt-4">
                    Careers that provide stability, structure, and defined
                    responsibilities are ideal for people with the ISTJ
                    personality type. They favor occupations with clear
                    guidelines, rational problem-solving techniques, and
                    real-world applications. Their innate qualities of
                    dependability, concentration, and attention to detail make
                    them ideal for positions in management, engineering,
                    finance, and law.
                  </p>
                  <p className="text-black text-lg mt-4">
                    In structured settings where discipline and order are
                    valued, such as the military, law enforcement, and
                    government institutions, ISTJs frequently perform well.
                    Additionally, they are drawn to professions in computer
                    programming, accounting, and business, where their accuracy
                    and analytical thinking are useful.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Although ISTJs are capable of working in groups, they
                    function best when duties are delineated clearly. They favor
                    work environments with clear regulations and minimal
                    opportunity for unforeseen adjustments. They might find it
                    difficult to work in fields like public relations, sales, or
                    the creative arts that require a lot of social interaction,
                    flexibility, or emotional sensitivity.
                  </p>
                  <h1 className="text-2xl font-bold mb-2">
                    Popular ISTJ Careers
                  </h1>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4  text-xl">
                      <b>Business & Finance:</b> Accountant, Financial Analyst,
                      Auditor, Budget Analyst
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Law & Order: </b>Lawyer, Judge, Police Officer,
                      Military Officer
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Engineering & Technology: </b>Civil Engineer, Computer
                      Programmer, Database Administrator
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Healthcare:</b> Doctor, Dentist, Medical Lab Technician
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Management & Administration:</b> Logistician,
                      Operations Manager, Office Administrator
                    </li>
                  </ul>
                </section>
              )}

              {/* Career Paths Section */}
              {activeSection === "careers" && (
                <section id="careers">
                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Careers to Avoid
                  </h1>

                  <p className="text-black text-lg mt-4">
                    Although ISTJs are good at many things, their preference for
                    order, reason, and practicality can make some jobs stressful
                    or unsatisfying. Positions that demand constant
                    adaptability, intense emotional sensitivity, or abstract
                    thought might not suit their skills.
                  </p>

                  <p className="text-black text-lg mt-4">
                    ISTJs may find it difficult to fill roles in emotionally
                    taxing occupations, highly social settings, or creative
                    industries. Frustration may result from jobs that lack
                    structure, have frequent changes, or have unclear
                    expectations.
                  </p>
                  <h1 className="text-2xl font-bold mb-2 mt-6">
                    Careers that ISTJs may find less suitable include:
                  </h1>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4  text-xl">
                      <b>Creative & Artistic Fields: </b>Actor, Graphic
                      Designer, Musician, Photographer
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Highly Social Roles: </b>Bartender, Retail Salesperson,
                      Public Relations Specialist, Receptionist.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Emotionally Intensive Jobs: </b>Preschool Teacher,
                      Child Care Provider, Speech Pathologist, Cosmetologist
                    </li>
                  </ul>
                </section>
              )}

              {/* Workplace Habits Section */}
              {activeSection === "workplace-habits" && (
                <section id="workplace-habits">
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Workplace habits
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Strong work ethics and a dedication to accountability are
                    hallmarks of ISTJ personalities. Structured settings with
                    well-defined expectations, regulations, and hierarchies are
                    ideal for them. Their hallmark is reliability; they view
                    their responsibilities as an indication of the trust that
                    has been placed in them and take them seriously. ISTJs are
                    methodical workers who make sure tasks are finished
                    precisely by adhering to established procedures.
                  </p>

                  <p className="text-black text-lg mt-4">
                    They thrive in positions requiring meticulous planning and
                    logical problem-solving, but they also enjoy working
                    independently. ISTJs value stability, and they could find it
                    difficult to deal with abrupt changes or departures from a
                    plan. They are very productive because they prefer order and
                    predictability, but they can also come across as inflexible
                    or unreceptive to novel ideas. ISTJs can work at their best
                    in a structured, rule-based environment that guarantees
                    productivity and consistency.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ISTJ as Subordinates
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ISTJs are the preferred subordinates for difficult
                    assignments and unpopular projects because they have a
                    strong desire for responsibility. These individuals, who are
                    frequently praised for their remarkable concentration and
                    attention to detail, are capable of handling any project
                    that has a manual. However, even when they are overworked or
                    there may be a better candidate for the position, this can
                    make them hesitant to relinquish responsibilities.
                  </p>
                  <p className="text-black text-lg mt-4">
                    The reason is they respect authority and hierarchy and have
                    no trouble following directions, people with the ISTJ
                    personality type are probably among the most productive
                    subordinates. This may be due to their stubbornness. Both
                    meeting project deadlines and arriving at work on time are
                    unlikely to ever be hampered by tardiness. Although they may
                    require well-defined tasks and procedures, ISTJs are
                    incredibly devoted, patient, careful, and loyal in their
                    work.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ISTJ Colleagues
                  </h2>

                  <p className="text-black text-lg mt-4">
                    When it comes to colleagues, ISTJ personalities are the most
                    reliable because they guarantee that projects are completed
                    on schedule and according to the book. When things get
                    difficult, they remain calm and collected, which is a trait
                    they typically expect their coworkers to possess.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ISTJs are perplexed by profoundly different personality
                    types, particularly more emotional ones, because of their
                    need for emotional support and transparency, as well as
                    their ability to produce something that seems partially
                    completed. ISTJ personalities believe that things are either
                    done correctly or incorrectly, and that ignoring or
                    sugarcoating the situation won't make it better.
                  </p>
                  <p className="text-black text-lg mt-4">
                    New ideas, theories, brainstorming, and innovations all
                    upend this cozy state, and it takes a lot of respect on the
                    part of ISTJs to accept their legitimacy. People with this
                    personality type, however, are an essential component of the
                    team in implementing these ideas once the specifics have
                    been outlined and a plan of action has been developed.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    ISTJ as Managers
                  </h2>

                  <p className="text-black text-lg mt-4">
                    ISTJs adore accountability and the authority that comes with
                    it. People with this personality type put a lot of effort
                    into fulfilling their responsibilities; they frequently go
                    above and beyond the call of duty, and they anticipate that
                    their subordinates will do the same. However, because of
                    their adherence to hierarchy, preference for following the
                    book, and general aversion to innovation, ISTJs force their
                    subordinates to tread very carefully; any deviation from the
                    rules must be supported by compelling evidence and
                    exceptional outcomes.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Since ISTJs are extremely intolerant of their subordinates'
                    failure to fulfill their responsibilities, including
                    adhering to the original plan, it is difficult to determine
                    whether the adage that it is preferable to act first and
                    seek permission later applies to them. ISTJ personalities
                    are able to offer harsh criticism because they respect
                    truth, at least in their own opinion, more than sensitivity.
                    Additionally, their readiness to make difficult choices may
                    make perceived insubordination the ultimate transgression.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    How Others See the ISTJ
                  </h2>

                  <p className="text-black text-lg mt-4">
                    There's something somber and conservative about ISTJs. They
                    usually look for predictable environments where they know
                    their role and want to know and abide by the game's rules.
                    Since ISTJs are more at ease managing a task than striking
                    up conversations with strangers, you might find them doing
                    something helpful even in social settings. When given a
                    task, they are very trustworthy and complete it completely.
                  </p>
                  <p className="text-black text-lg mt-4">
                    ISTJs are straightforward, pragmatic, and seldom draw
                    attention to themselves. They have a penchant for the
                    classics and typically choose their clothing and belongings
                    more for practicality than style. ISTJs are known for their
                    direct communication style and keen attention to detail.
                    Generally speaking, they are more excited to share factual
                    information than to delve into theoretical or untested
                    concepts.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    How Rare Is the ISTJ Personality Type?
                  </h2>

                  <p className="text-black text-lg mt-4">
                    According to the most recent global data, ISTJ is the most
                    frequently found personality type, representing 15.9% of
                    people overall. It is more common among men at 18.9%, while
                    13.3% of women belong to this category.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Famous ISTJ Personalities
                  </h2>

                  <p className="text-black text-lg mt-4">
                    The traits of the ISTJ personality type, such as discipline,
                    practicality, and a strong sense of duty, are exhibited by
                    many well-known individuals.
                  </p>
                  <ul className="list-disc pl-5 text-black text-xl">
                    <li className="mt-4  text-xl">
                      <b>Henry Ford:</b> Through organized innovation and
                      efficiency, he transformed the automobile industry.{" "}
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Denzel Washington: </b> A dependable actor who is
                      disciplined and hardworking.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Amal Clooney: </b> A human rights attorney who is
                      principled and thorough.{" "}
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Warren Buffett:</b> A seasoned investor renowned for
                      his strategic, long-term thinking.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Queen Victoria:</b> Throughout her lengthy reign, she
                      upheld stability and order.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Matt Damon: </b> renowned for his methodical approach
                      to both filmmaking and acting. Condoleezza Rice is a
                      strategic thinker who takes responsibility very seriously.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Jeff Bezos:</b> Bezos used a methodical and meticulous
                      approach to build Amazon.
                    </li>

                    <li className="mt-4  text-xl">
                      <b>Angela Merkel: </b> A sensible, practical leader who
                      appreciated order.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>George H. W. Bush: </b> A stable and trustworthy
                      politician.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Actress Natalie Portman:</b> meticulous and has a
                      strong work ethic. Harry Truman was a responsible,
                      disciplined, and realistic leader.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>Robert De Niro: </b>Committed to his work with a
                      somber, businesslike manner.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>J. D. Rockefeller: </b>used meticulous planning and
                      long-term organization to build an empire.
                    </li>

                    <li className="mt-4  text-xl">
                      <b>Queen Elizabeth II: </b>renowned for her steadfast
                      adherence to tradition and sense of duty.
                    </li>
                    <li className="mt-4  text-xl">
                      <b>George Strait: </b>A country music traditionalist with
                      a steady, reliable career.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Hobbies and Interests
                  </h2>

                  <p className="text-black text-lg mt-4">
                    Games like chess and trivia that demand concentration and
                    strategic thinking appeal to ISTJs. They also enjoy watching
                    sports and playing computer games. They place a high value
                    on physical fitness and frequently play solitary sports like
                    golf, which allow them to use their focus and discipline.
                  </p>

                  <h2 className="text-3xl font-bold mb-2 mt-6">
                    Tips for Interacting With ISTJs
                  </h2>
                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    For Friendships
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ISTJs are more likely to get along with friends who are
                    similar to them. Despite their tendency toward seriousness,
                    they enjoy having fun. You can be a great friend by
                    encouraging them to engage in activities and hobbies they
                    enjoy, even if they aren't eager to try new things. For
                    Parents
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">For Parents</h2>
                  <p className="text-black text-lg mt-4">
                    ISTJ parents are adept at giving their kids security and
                    stability and have a tendency to be very tradition-focused.
                    ISTJ children frequently discover that their parents treat
                    them with consideration and deference, and they anticipate
                    receiving the same treatment in return. ISTJ parents will
                    discover that their kids feel more secure when they are
                    consistent. A child who is an ISTJ can benefit from
                    routines, gradual change, and time to get used to new
                    circumstances.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">For Partners</h2>
                  <p className="text-black text-lg mt-4">
                    People with similar interests and traits are the most
                    compatible with the ISTJ, though they can get along with
                    people of any personality type. Other types that get along
                    well with each other are ISTPs, ISFJs, ESTJs, and other
                    ISTJs.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Although the ISTJ is capable of feeling intense emotions,
                    they frequently find it difficult to express them in
                    romantic relationships. They can come across as insensitive
                    and don't reveal their souls easily. They can see the
                    opposing viewpoint of an argument with the aid of facts and
                    rational justifications.
                  </p>

                  <h1 className="text-3xl font-bold mb-2 mt-6">
                    Tips for Personal Growth
                  </h1>

                  <h1 className="text-2xl font-bold mb-2 mt-6">
                    Embrace Flexibility:
                  </h1>

                  <p className="text-black text-lg mt-4">
                    Though they thrive on routine and structure, ISTJs must
                    challenge established practices in order to grow personally
                    and professionally. A particular method is not necessarily
                    the best or only one just because it has been used for a
                    long time. Being receptive to fresh perspectives and
                    creative fixes can result in worthwhile opportunities.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Think Beyond the Rules:
                  </h2>

                  <p className="text-black text-lg ">
                    Although ISTJs hold authority and rules in high regard, not
                    all of them are reasonable or equitable. They can make
                    better, more moral decisions if they learn to evaluate
                    regulations critically rather than mindlessly.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Allow for Spontaneity:
                  </h2>
                  <p className="text-black text-lg">
                    ISTJs benefit from strict schedules, but too much structure
                    can be constrictive. Their lives can be exciting and
                    balanced when they try new things without following a strict
                    plan, such as an impromptu project or an unplanned outing.
                  </p>

                  <h2 className="text-2xl font-bold mb-2 mt-6">
                    Develop Emotional Awareness:
                  </h2>
                  <p className="text-black text-lg">
                    Although ISTJs are sensible and pragmatic, they could find
                    it difficult to communicate their feelings. It is possible
                    to improve relationships and interactions in both the
                    personal and professional spheres by taking the time to
                    comprehend and express feelings.
                  </p>
                </section>
              )}

              {/* Conclusion Section */}
              {activeSection === "conclusion" && (
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-2 mt-6">Conclusion</h2>
                  <p className="text-black text-lg mt-6">
                    The traits of the ISTJ personality type include
                    practicality, discipline, and dependability. Recognized for
                    their methodical outlook on life, ISTJs flourish in settings
                    where regulations and order are in place. They offer an
                    unmatched sense of accountability and commitment, whether in
                    friendships, relationships, or professional roles. Their
                    inclination for structure, however, can occasionally make it
                    difficult for them to be flexible and express their
                    emotions. ISTJs have even more potential if they embrace
                    flexibility, take into account different viewpoints, and
                    strike a balance between their personal and professional
                    lives. Despite their lack of expressiveness, their steadfast
                    devotion, loyalty, and methodical approach make them
                    invaluable in both personal and professional contexts.
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

export default ISTJBlogs;
