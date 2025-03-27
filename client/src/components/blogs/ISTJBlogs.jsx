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

                  <h2 className="text-2xl font-bold mb-4">
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

                  <h2 className="text-2xl font-bold mb-4">
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

                  <h2 className="text-3xl font-bold mb-1 mt-4">
                    INFJ Strengths
                  </h2>
                  <h2 className="text-2xl font-bold mb-1 mt-4">Perceptive</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Advocates with the INFJ personality type are aware that
                    outward appearances can be deceiving. They have an almost
                    supernatural ability to comprehend people’s true needs,
                    wants, and motivations because they work hard to see past
                    superficiality and pursue deeper truths.
                  </p>
                  <h2 className="text-2xl font-bold mb-1 mt-4">Principled</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJs hold strong morals and beliefs, particularly in the
                    area of ethics. They actively work to avoid deceit, even
                    when it might be advantageous because they believe that
                    lying is immoral. They are one of the least prone
                    personality types to exploit other people.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Enthusiastic</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    People with INFJ personalities yearn for a sense of
                    direction in life. Instead of following the status quo or
                    living in a bubble, they are resolute in their pursuit of
                    their goals. INFJs welcome chances to aim for greatness
                    because they are inspired by their future vision.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Altruistic</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJs aren’t content to achieve success at the expense of
                    others. Being aware of how their words and deeds affect
                    other people, they wish to use their strengths for the
                    benefit of society. Fundamentally, INFJs want to improve the
                    world, beginning with those in their immediate vicinity.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">Creative</h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJs value their creative side and are always looking for
                    new ways to express themselves and think creatively. They
                    stand out due to their uniqueness, which enables them to
                    tackle problems in novel ways.
                  </p>

                  <h2 className="text-3xl font-bold mb-1 mt-4">
                    INFJ Weaknesses
                  </h2>
                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Sensitive to Criticism
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    One of the weaknesses of the INFJ personality type is that
                    they are sensitive to criticism. This is particularly true
                    if they feel that someone is questioning their most valued
                    beliefs or ideals. This personality type is prone to
                    defensiveness, dismissiveness, or anger when it comes to
                    matters that are important to them.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Apprehensive to Communicate
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJ personalities are private but respect truthfulness and
                    genuineness. Being open and vulnerable about their struggles
                    can be difficult for them because they don’t want to burden
                    others with their problems. Sadly, they might
                    unintentionally hinder themselves or cause a rift in their
                    relationships if they don’t ask for assistance.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Perfectionistic
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    Idealism comes to define these visionary personalities. The
                    messiness of real life is sometimes left out, even though
                    this is a great quality in many ways. If INFJs are
                    preoccupied with flaws and question whether they should be
                    searching for something better, they may struggle to
                    appreciate their jobs, living arrangements, or
                    relationships.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Avoiding the Ordinary
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJs have a strong desire to live extraordinary lives. But
                    without breaking it down into small, manageable steps, it’s
                    difficult to accomplish anything extraordinary. They might
                    find it difficult to realize their lofty goals unless they
                    convert them into daily schedules and to-do lists.
                  </p>

                  <h2 className="text-2xl font-bold mb-1 mt-4">
                    Easily Burnt Out
                  </h2>
                  <p className="text-black text-lg text-justify mt-4">
                    INFJs have limited ways to release their pent-up emotions
                    due to their reserve and perfectionism. If they don’t
                    balance their need for self-care and relaxation with their
                    desire to assist others, people with this personality type
                    may become exhausted.
                  </p>

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
                          <td className="p-3 text-black">Reserved</td>
                          <td className="p-3 text-black">
                            Occasionally hard to get to know
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">
                            Cherishes contemplating the meaning of life
                          </td>
                          <td className="p-3 text-black">Dislike conflict</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Extremely artistic and creative
                          </td>
                          <td className="p-3 text-black">
                            Sensitive to criticism
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">Future-oriented</td>
                          <td className="p-3 text-black">Prone to burnout</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Values intimate, meaningful relationships
                          </td>
                          <td className="p-3 text-black">
                            They can be stubborn
                          </td>
                        </tr>
                        <tr className="bg-yellow-400">
                          <td className="p-3 text-black">Idealistic</td>
                          <td className="p-3 text-black">
                            Prone to having unrealistic expectations
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-3 text-black">
                            Sensitive to others’ needs
                          </td>
                          <td className="p-3 text-black">
                            Excessively sensitive
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h1 className="text-3xl font-bold mt-8 mb-2">
                    Connecting with Others
                  </h1>
                  <p className="text-black text-lg">
                    INFJs cherish genuine, long-lasting connections with other
                    people. Being genuinely known by someone and being known in
                    return is one of the few things that makes these
                    personalities happy. NFJs typically communicate in a kind
                    and considerate manner, and they prefer deep discussions to
                    idle chatter. People around them may be profoundly impacted
                    by their emotional openness and wisdom.
                  </p>
                  <blockquote className="border-l-8 border-teal-500 pl-4 italic text-black font-bold text-xl py-10 mt-6 text-justify">
                    For INFJs, just a handful of truly authentic connections can
                    be more than enough to fill their hearts.
                  </blockquote>
                  <p className="text-black text-lg">
                    INFJs can be overflowing with love from a few close
                    relationships as long as they are sincere. INFJ
                    personalities put a lot of effort and care into their
                    relationships, but they are thoughtful and frequently
                    selfless, so they don’t always feel valued in return.
                    Individuals with this personality type typically take their
                    time and carefully consider how their actions may affect
                    other people before acting. They may therefore become
                    irritated when others fail to see their good intentions.
                    INFJs are prone to taking things personally and are
                    extremely sensitive to criticism of any type.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Communication Style
                  </h2>
                  <p className="text-black text-lg">
                    The communication style of INFJs is deliberate and
                    thoughtful. They are naturally able to understand the
                    feelings and viewpoints of others, which enables them to
                    manage complex discussions with ease. The following are the
                    salient characteristics of their communication style.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Empathy and Understanding
                  </h2>
                  <p className="text-black text-lg">
                    INFJs are keen listeners who frequently pick up on hidden
                    emotions and problems. In their interactions, they place a
                    high value on being authentic and react with sincere concern
                    and consideration.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Preference for Depth
                  </h2>
                  <p className="text-black text-lg">
                    For INFJs, even small talk can be draining. They prefer
                    meaningful connections to surface-level conversation and
                    flourish when talking about deep topics like life’s meaning,
                    aspirations, and fundamental values.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Diplomatic Expression
                  </h2>
                  <p className="text-black text-lg">
                    INFJs choose their words carefully in order to avoid
                    needless conflict and to foster understanding and harmony in
                    their conversations. They frequently communicate in a way
                    that promotes healthy relationships.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Internal Processing
                  </h2>
                  <p className="text-black text-lg">
                    Conversational pauses may result from their need for some
                    time to think things through before speaking. These quiet
                    periods are a result of their introspective nature and are
                    not to be interpreted as a sign of indifference. INFJs’
                    communication essentially reflects their perceptive and
                    sympathetic nature, giving their interactions a special
                    depth.
                  </p>

                  <h1 className="text-3xl font-bold mb-4 mt-6">
                    How INFJs Are Viewed
                  </h1>
                  <p className="text-black text-lg mt-4">
                    INFJs tend to be quiet, sensitive, and caring people who pay
                    close attention to what other people have to say. They have
                    a keen sense of human nature and wish to aid others in
                    gaining comprehension. Complex personal issues don’t scare
                    INFJs; in fact, they are highly complex individuals with a
                    rich inner life that few people are aware of.
                  </p>

                  <p className="text-black text-lg mt-4">
                    They think deeply and consider ethical issues in great
                    detail. When one of their values is threatened or
                    questioned, counselors may surprise others with their
                    intensity because they come across as so gentle and reserved
                    at first. Their serene outward appearance conceals the
                    complexity of their inner lives.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Because INFJs are such complex individuals, they can be
                    difficult to get to know because they may be reluctant to
                    interact with people who might not understand or value them.
                    Despite their desire to get along with people and help them
                    achieve their objectives, they are fiercely devoted to their
                    set of values and will not follow others down a path that
                    does not feel right for them. They are likely to distance
                    themselves when they feel that their principles are not
                    being upheld or when their gut tells them that someone’s
                    intentions are not honorable.
                  </p>

                  <p className="text-black text-lg mt-4">
                    INFJs are likely to be described by acquaintances as quiet,
                    intelligent, serious, gentle, and perhaps a little
                    reclusive. Although they may also observe that INFJs can
                    occasionally be moody, distant, or even a little grumpy,
                    others generally find them to be pleasant to be around.
                    Overall, those who only rarely interact with INFJs are
                    likely to view them as difficult to deal with and even a
                    little scary.
                  </p>

                  <p className="text-black text-lg mt-4">
                    People who are closer to an INFJ are likely to see past
                    their outward appearance and appreciate their depth of
                    empathy as well as their inquisitive and perceptive
                    personality. INFJs are always available to provide sane and
                    beneficial advice when friends, family, or trusted coworkers
                    require constructive criticism and a different viewpoint.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Rather than igniting fires, INFJs prefer to put them out.
                    When they serve on organizing committees, PTAs, city
                    councils, work teams, non-profit boards, or task forces,
                    others come to recognize their remarkable capacity to calm
                    tense situations soothe wounded feelings, smooth ruffled
                    feathers, arbitrate petty squabbles, and restore the spirit
                    of cooperation whenever it has been compromised.
                  </p>

                  <h1 className="text-3xl font-semibold mb-2">
                    Cognitive Functions and Personality Development Phases
                  </h1>
                  <h1 className="text-3xl font-semibold mb-2">image here</h1>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Dominant: Introverted Intuition (Ni)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    The primary function of INFJs, which forms the basis of
                    their personality, is Introverted Intuition (Ni). They can
                    see patterns and connections between seemingly unrelated
                    pieces of information thanks to this function, which
                    frequently results in revelations that seem almost
                    prophetic. The process of Ni is not conscious; rather, it is
                    a subconscious synthesis of information that leads to
                    epiphanies.
                  </p>

                  <p className="text-black text-lg mt-4">
                    Because they are attuned to subconscious patterns by their
                    relationship with Ni, INFJs frequently experience a
                    dreamlike quality in their daily lives. This connection can
                    occasionally make it difficult to distinguish between
                    reality and dreams, giving their newfound understanding an
                    air of ethereality or profound certainty.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Together with their subordinate Extroverted Sensing (Se)
                    function, Ni collects sensory information, which Ni then
                    interprets and integrates to create a comprehensive
                    understanding. Because of the special feedback loop this
                    interaction produces, INFJs can identify connections, make
                    intuitive leaps, and make remarkably accurate predictions.
                    One of the main contributors to the profound perceptions and
                    comprehension of the world that INFJs are renowned for is
                    the relationship between Ni and Se.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Additionally, INFJs’ dominance in introverted intuition
                    manifests in the following ways:
                  </p>

                  <p className="text-black text-lg mt-4">
                    <ul className="list-disc pl-5 text-black text-xl">
                      <li className="mt-4 text-xl">
                        <b>Highly Focused:</b> INFJs tend to be intensely
                        focused on their internal insights.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Single-Minded Dedication:</b> Once they have formed
                        an intuition about something, INFJs tend to adhere to it
                        very tightly, often becoming single-minded in their
                        focus.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Perceived Stubbornness:</b>This trait can sometimes
                        lead others to view INFJs as stubborn and unyielding.
                      </li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Auxiliary: Extraverted Feeling (Fe)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INFJs’ auxiliary function, Extraverted Feeling (Fe),
                    controls their interpersonal relationships. INFJs are
                    extremely sympathetic and sensitive to the feelings of
                    people around them because of this function. They can
                    navigate social relationships and promote harmony and
                    emotional well-being by reading others’ emotional cues. As
                    natural caregivers, INFJs are constantly looking for ways to
                    support and assist the people they care about.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INFJs with Fe are excellent at detecting the emotional
                    climate of space and figuring out how other people are
                    feeling. This enables them to foster constructive social
                    dynamics, but it may also cause them to prioritize the needs
                    of others over their own emotional needs. They may
                    occasionally feel exhausted or misinterpreted due to their
                    desire to maintain emotional harmony.
                  </p>
                  <p className="text-black text-lg mt-4">
                    In intimate or one-on-one situations, where they feel
                    comfortable enough to open up, INFJs are frequently more
                    expressive. In smaller, more intimate settings, they can be
                    talkative and expressive, even though they might come across
                    as quiet or reserved in larger gatherings.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Additionally, the auxiliary Fe function manifests in the
                    following ways:
                  </p>
                  <p className="text-black text-lg mt-4">
                    <ul className="list-disc pl-5 text-black text-xl">
                      <li className="mt-4 text-xl">
                        <b>Highly Aware of Others’ Emotions: </b>INFJs are
                        highly perceptive of what others are feeling but may
                        sometimes be less aware of their own emotions.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Difficulty Saying No:</b> Because they are so attuned
                        to others’ emotions, INFJs often struggle to say no to
                        requests, fearing they might cause disappointment or
                        hurt feelings.
                      </li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Tertiary: Introverted Thinking (Ti)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    The third function for INFJs is Introverted Thinking (Ti),
                    which is crucial for honing their judgment. Ti helps them
                    organize and make sense of their thoughts and ideas by
                    giving their internal world of intuitive insights (Ni) a
                    logical framework. This function balances logical coherence
                    with intuitive understanding by cross-checking and improving
                    the Ni-Fe judgments. As their Ti increases, INFJs also show
                    a greater interest in investigating their inferior function,
                    Extraverted Sensing (Se).
                  </p>
                  <p className="text-black text-lg mt-4">
                    Ti can occasionally cause internal conflict for INFJs as
                    they attempt to strike a balance between reason and feeling.
                    On the other hand, it improves their capacity to translate
                    their internal insights into clarity and consistency.
                  </p>

                  <p className="text-black text-lg mt-4">
                    <ul className="list-disc pl-5 text-black text-xl">
                      <li className="mt-4 text-xl">
                        <b>Developing Theories and Ideas: </b> INFJs frequently
                        base their decisions on the theories and ideas they come
                        up with as a result of their observations.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Alone vs. Social Decision-Making: </b>In social
                        situations, INFJs tend to make decisions based on their
                        Introverted Intuition (Ni) and Extraverted Feeling (Fe).
                        But when they’re by themselves, they might rely more on
                        their Introverted Thinking (Ti) for organization and
                        reasoning.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Stress and Decision-Making:</b> INFJs may rely more
                        on their feelings when under pressure, particularly when
                        they are attempting to win over others. They are more
                        inclined to rely on instinct and reasoned analysis in
                        less stressful situations.
                      </li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Inferior: Extraverted Sensing (Se)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INFJs have an inferior or “missing” function known as
                    extraverted sensing (Se). This indicates that INFJs are less
                    receptive to the tangible aspects of life or specific
                    details. Introverted Intuition (Ni), their dominant
                    function, synthesizes and experiences the sensory data that
                    their Se collects from their environment.
                  </p>
                  <p className="text-black text-lg mt-4">
                    INFJs are “highly sensitive persons (HSPs),” meaning that
                    their nervous systems are extremely permeable and
                    stimuli-sensitive. Compared to people with other personality
                    types, this may make them more likely to feel overstimulated
                    or overwhelmed. Sometimes they may not recognize they are
                    overstimulated until it is too late due to the disconnection
                    between their intuitive (N) and sensing (S) functions.
                  </p>
                  <p className="text-black text-lg mt-4">
                    The influence of Se on INFJs includes the following:
                  </p>
                  <p className="text-black text-lg mt-4">
                    <ul className="list-disc pl-5 text-black text-xl">
                      <li className="mt-4 text-xl">
                        <b>Subconscious Impact: </b>Although Se is a less
                        developed and largely unconscious aspect of their
                        personality, it still plays a role in shaping their
                        experiences.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Awareness of Surroundings:</b> Se helps INFJs pay
                        attention to the world around them and stay attuned to
                        their environment.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Living in the Present:</b> This function allows INFJs
                        to focus on the present moment instead of being consumed
                        by thoughts of the future.
                      </li>
                      <li className="mt-4 text-xl">
                        <b>Appreciating Physical Activities:</b> INFJs may find
                        joy in activities like hiking or dancing, as Se
                        encourages them to engage with the physical world.
                      </li>
                    </ul>
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    INFJ Personality Development Phases
                  </h2>
                  <p className="text-black text-lg mt-4">
                    According to the arrangement of their cognitive function
                    stack, INFJs go through three general phases in the
                    development of their personalities.
                  </p>
                  <p className="text-black text-lg mt-4">
                    Extraverted Feeling (Fe) emerges after Introverted Intuition
                    (Ni), and so on. One special instance in this developmental
                    process is the inferior function, Extraverted Sensing (Se),
                    which attracts attention earlier than anticipated.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Phase I: Early Life and Growth
                  </h2>
                  <p className="text-black text-lg mt-4">
                    INFJs develop and heavily rely on their dominant function,
                    Introverted Intuition (Ni), early in life. Their secondary
                    function, extraverted feeling (FE), which serves as an
                    extraverted tool for interacting with the outside world,
                    also starts to develop as introversion. When combined, the
                    Ni-Fe function pair gives INFJs the ability to make and
                    communicate judgments, especially about individuals and
                    their underlying motivations. Even though Ni is a perceiving
                    function, INFJs may come across as narrow-minded or
                    opinionated during Phase I, especially to others. Young
                    INFJs frequently lack the discernment to know when or how to
                    express their Ni-Fe judgments, even when they are remarkably
                    accurate. They now rely more on their initial perceptions
                    because their tertiary function, Introverted Thinking (Ti),
                    has not yet matured enough to allow them to edit or revise
                    their conclusions.
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Phase II: From Adolescence to Adulthood (Teens to 30s)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Extraverted Sensing (Se), the inferior function of INFJs,
                    enters the picture and starts to have a greater impact once
                    the dominant function reaches a particular threshold of
                    strength and dominance. Because it is not the function that
                    is next in line for development in the function stack, this
                    can be confusing. The inferior’s bipolar relationship with
                    the dominant function is the source of its excessive
                    influence. As I’ve mentioned previously, the main cause of
                    poor career and interpersonal decision-making is inferior
                    function. Regretfully, its impact peaks during Phase II of
                    type development, which also occurs during the period when
                    INFJs are making relationships and career decisions that
                    will change their lives. As their inferior function becomes
                    more prevalent and influential, INFJs also start to refine
                    and expand their judgments through their tertiary function,
                    Introverted Thinking (Ti). Their Ti reasoning helps them to
                    verify and improve their Ni-Fe assessments. As their Ti
                    increases, INFJs also show a greater interest in
                    investigating their inferior function, Extraverted Sensing
                    (Se).
                  </p>

                  <h2 className="text-2xl font-semibold mb-4 mt-6">
                    Phase III: Life’s Later Chapters: 30s, 40s, and Beyond
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Phase III is characterized by an effort to comprehend and
                    integrate the tertiary and inferior functions, a stage that
                    many people never reach or finish. INFJs can more clearly
                    see their journey toward wholeness by bringing these
                    unconscious processes into the light of consciousness. To do
                    this, one must comprehend the nature of these functions’
                    manifestations within their type and develop a greater
                    awareness of one’s unconscious behavioral patterns. Healthy
                    ideas and practices can take their place once these patterns
                    are recognized. Making wiser and more thoughtful decisions
                    and actions leads to a long-lasting sense of fulfillment and
                    completeness. Investigating the nature of and difficulties
                    related to their tertiary Ti and inferior Se in greater
                    detail is part of Phase III personal growth for INFJs.
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

export default ISTJBlogs;
