import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ENFPBlogs() {
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
                    Understanding the ENFP: The Campaigner
                    <br /> Personality (Extraverted, Intuitive, Feeling, and
                    Perceiving)
                  </h1>

                  <p className="text-black text-lg text-justify mt-4">
                    The extraverted, intuitive, feeling, and perceiving traits
                    that define the ENFP (Campaigner) personality type. These
                    people embrace lofty ideals and deeds that demonstrate their
                    optimism and humaneness. ENFPs are recognizable in any crowd
                    due to their vibrant, positive outlook on life. They are
                    gregarious, tolerant, and open-minded individuals who
                    flourish when they form deep, emotional bonds with other
                    people. Warm, enthusiastic, and full of energy, ENFPs are
                    always willing to assist others in discovering their own
                    creative potential. With a contagious enthusiasm for new
                    concepts, people, and activities, they are people-centered
                    creators. Although they are great communicators who inspire
                    others, they may have trouble focusing and frequently ignore
                    important details in favor of the larger, more creative
                    picture.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-4">
                    What is an ENFP Personality Type?
                  </h2>

                  <p className="text-black text-lg mt-4">
                    The Myers-Briggs Type Indicator (MBTI) detects 16
                    personality types, and ENFP stands for Extraverted,
                    Intuitive, Feeling, and Perceiving. Those who identify as
                    ENFPs are said to be independent, vivacious, charming, and
                    enthusiastic. Because of their creative nature, they perform
                    well in settings that permit innovation.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-4">
                    ENFP Subtypes (ENFP-A and ENFP-T)
                  </h2>
                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Assertive Campaigner: ENFP-A
                  </h2>

                  <p className="text-black text-lg mt-4">
                    An "Assertive Campaigner" is another term for an ENFP-A. In
                    their relationships, this ENFP subtype is more likely to be
                    self-assured and emotionally in control.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Turbulent Campaigner: ENFP-T
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Often referred to as "Turbulent Campaigners," ENFP-Ts are
                    less confident and emotionally stable, and they also feel
                    more anxious when faced with daily stress.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-6">
                    Cognitive Functions of ENFP
                  </h2>
                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Dominant: Extraverted Intuition (Ne)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Future-focused concepts, abstract thought, and possibilities
                    are the main focuses of ENFPs. They are very good at
                    spotting relationships, connections, and patterns. They can
                    explore several ideas out loud before coming to a decision
                    thanks to their Ne function. In contrast to Se, which
                    collects information directly from the senses, Ne explores
                    potentials, hidden patterns, and abstract insights. Because
                    of their receptiveness to new concepts, ENFPs are passionate
                    explorers who pursue knowledge via reading, the arts, and
                    conversations. They maintain a sense of anticipation because
                    they are constantly curious about what will happen next.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Auxiliary: Introverted Feeling (Fi)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Fi is relied upon by ENFPs to make choices based on feelings
                    and personal values rather than impartial reasoning. They
                    look for genuineness and work to make sure that their
                    actions and values line up. Regardless of social
                    conventions, Fi encourages the formation of a distinct
                    worldview. Fi is used by ENFPs to assess artistic and moral
                    issues rather than logical correctness. In contrast to
                    INFPs, who begin with an internal judgment and then test it
                    with Ne, ENFPs use Fi to hone their insights after
                    exploring.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Tertiary: Extraverted Thinking (Te)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Te supports logical thought organization and logical
                    judgment expression in ENFPs. Self-actualized ENFPs employ
                    Te for assertiveness, leadership, and organized
                    decision-making, whereas ENFPs tend to keep judgments
                    internal (Fi). By cultivating Te, they can improve
                    relationships through direct communication and boldly voice
                    their opinions. Undeveloped Te, however, can result in
                    passive-aggressive behaviors. By adopting Te, ENFPs can
                    become more effective communicators and assume leadership
                    positions.
                  </p>
                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Inferior: Introverted Sensing (Si)
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Si makes it possible for ENFPs to contrast memories from the
                    past with current experiences. It raises awareness of
                    customs, physical experiences, and historical backgrounds.
                    There is a conflict for ENFPs between their Si-rooted
                    adherence to cherished customs and their Ne-driven openness.
                    Their Si can evoke nostalgia, but their Ne is drawn to
                    novelty. Si also increases body awareness, which can
                    occasionally result in hypersensitivity to bodily
                    sensations. Later in life, ENFPs learn to strike a balance
                    between the grounding effects of Si and their adventurous
                    Ne.
                  </p>

                  <h2 className="text-3xl font-bold mt-4 mb-6">
                    Personality Development Phases
                  </h2>
                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase I: Dominant Ne Development
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Early childhood and adolescence are times when ENFPs hone
                    and polish their Ne. During this stage, there is a great
                    deal of curiosity and open-minded exploration. Reading,
                    travel, art, and social interactions are just a few of the
                    varied experiences that ENFPs use to absorb information.
                    Without significant obligations, they are free to establish
                    relationships and associations, which broadens their body of
                    knowledge. They might be in their twenties at this point.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase II: Influence of Inferior Si and Auxiliary Fi
                  </h2>
                  <p className="text-black text-lg mt-4">
                    ENFPs start to feel the effects of their inferior Si as Ne
                    matures, which frequently causes confusion. Their identity,
                    values, and beliefs are refined as they simultaneously
                    develop their auxiliary Fi. In this stage, both outer (Ne)
                    and inner (Fi) exploration are done. As their values become
                    clearer, ENFPs become more serious, focused, and
                    aspirational. Their personal development is guided by their
                    Fi, which assists them in balancing the demands of their
                    inferior Si and dominant Ne.
                  </p>

                  <h2 className="text-2xl font-bold mt-4 mb-4">
                    Phase III: Integration of Tertiary Te and Inferior Si
                  </h2>
                  <p className="text-black text-lg mt-4">
                    Phase III, which entails consciously integrating tertiary Te
                    and inferior Si, is never fully reached by many people. In
                    order to achieve self-mastery at this point, ENFPs cultivate
                    their Te for assertiveness and logical organization while
                    striking a healthy balance between their nostalgic Si and
                    exploratory Ne. By accepting all of their cognitive
                    abilities, they progress toward fulfillment and personal
                    wholeness.
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

export default ENFPBlogs;
