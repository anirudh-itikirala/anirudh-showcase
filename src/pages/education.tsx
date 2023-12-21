import clsx from "clsx";
import * as React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";
import ArrowLink from "@/components/links/ArrowLink";

export default function Education() {
  const [vantaEffect, setVantaEffect] = React.useState(0);
  const vantaRef = React.useRef(null);
  React.useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
          scale: 2.0,
          scaleMobile: 2.0,
          THREE,
        })
      );
    }
    handleMenuClick();
  }, [vantaEffect]);

  // WORK ON REMAINING CLUBS AND THINGS
  const [popCard, setPopCard] = React.useState("hidden");
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard("inline-block");
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle="Education" />
      <main>
        <section
          className={clsx(
            "bg-white transition-all dark:bg-dark",
            fade ? "opacity-100" : "opacity-0"
          )}
          ref={vantaRef}
        >
          <div className="layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 ">
            <div className="mt-36 flex w-full flex-col">
              {/* UMD PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://www.cs.umd.edu/"
                  >
                    UMD
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://www.cs.umd.edu/"
                  >
                    UMD College Park
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>BS in Computer Science</div>
                    <div>August 2020 - May 2024</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    Courses taken during my time at the University of Maryland -
                    College Park:
                    <div className="ml-6">
                      <li>Object Oriented Programming (Java)</li>
                      <li>Advanced Data Structures (Java)</li>
                      <li>
                        Functional Programming/Data Structures (Rust, OCaml,
                        Ruby)
                      </li>
                      <li>Advanced Linear Algebra</li>
                      <li>
                        Discrete Structures (Mathematical reasoning,
                        combinatorics, trees, discrete probability.)
                      </li>
                      <li>Computer System Organization (C/C++)</li>
                      <li>
                        Practical Tools for Data Science (SQL, Tableau, Python)
                      </li>
                      <li>App Development (Kotlin, Swift)</li>
                      <li>Compilers (C, Racket) </li>
                      <li>Algorithms</li>
                      <li>
                        {" "}
                        Applied Probability and Statistics (R, SAS, ANOVA,
                        Hypothesis Testing){" "}
                      </li>
                    </div>
                  </h6>
                </div>
              </div>
              
              {/* Honors Humanities */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://honors.umd.edu"
                  >
                    Honors College
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://honors.umd.edu"
                  >
                    Honors College
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>Capstone Holder</div>
                    <div>August 2020 - Present</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    <div className="ml-6">
                      <li>
                        Developed an informative website that explores the
                        ethical implications of artificial intelligence,
                        presenting well-researched content on the moral
                        considerations, societal impacts, and potential future
                        developments in the field of AI.
                      </li>
                      <li>
                        Conducted a thorough analysis of sacred texts pivotal to
                        Hinduism and composed a reflective narrative on the
                        influence of Hindu teachings in providing resilience and
                        guidance to my family during challenging times.
                      </li>
                    </div>
                  </h6>

                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://aartificialintelligence.mailchimpsites.com"
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* Frisbee */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://sites.google.com/site/umdwomensultimate/info-for-new-players"
                  >
                    Club Ultimate Frisbee
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://sites.google.com/site/umdwomensultimate/info-for-new-players"
                  >
                    Club Ultimate Frisbee
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    
                    <div>August 2022 - Present</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    {" "}
                    <div className="ml-6">
                      <li>
                      Attend weekly practice sessions three times a week to maintain skill level and team cohesion.
                      </li>
                      <li>
                      Travel to away games as needed, contingent upon qualification and team selection.
                      </li>
                      <li>
                      Participate in team hangouts and activities to foster team spirit and camaraderie.
                      </li>
                    </div>
                  </h6>
                </div>
              </div>

              {/* I4C */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://inclusion.cs.umd.edu"
                  >
                    I4C Student Advisory Board
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://inclusion.cs.umd.edu"
                  >
                    I4C Student Advisory Board
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>Board Member</div>
                    <div>August 2020 - May 2021</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    {" "}
                    Actively contribute to the advisory board of the Iribe
                    Initiative for Inclusion and Diversity
                    <div className="ml-6">
                      <li>
                        Strategize with members to enhance inclusivity across
                        the institution.
                      </li>
                      <li>
                        Advise on policy development based on diversity research
                        findings.
                      </li>
                    </div>
                  </h6>

                  <h6>
                    {" "}
                    Spearhead educational workshops and mentorship programs
                    <div className="ml-6">
                      <li>
                        Coordinate workshops to raise awareness on diversity
                        issues.
                      </li>
                      <li>
                        Mentor underrepresented students, providing career and
                        academic guidance.
                      </li>
                    </div>
                  </h6>

                  <h6>
                    {" "}
                    Evaluate and report on initiative outcomes
                    <div className="ml-6">
                      <li>
                        Design feedback mechanisms to assess program impact.
                      </li>
                      <li>
                        Analyze data to recommend improvements and celebrate
                        successes.
                      </li>
                    </div>
                  </h6>
                </div>
              </div>

              {/* IEFS */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://terplink.umd.edu/organization/international-economics-and-finance-society"
                  >
                    IEFS
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://terplink.umd.edu/organization/international-economics-and-finance-society"
                  >
                    International Economics and Finance Society
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>Content Creation Lead</div>
                    <div>August 2020 - May 2021</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6> Research and analyze global economic trends and financial
                    news, providing insightful commentary on current affairs
                    both domestically and internationally.
                    <div className="ml-6">
                      <li>
                      Contribute to the society's mission by preparing
                        presentations and reports that drive conversations on
                        economic stability and growth prospects.
                      </li>
                      <li>
                      Publish well-crafted articles on Medium, elucidating
                        complex economic concepts and their real-world
                        implications for a diverse readership.
                      </li>
                      <li>
                        Collaborate with club members to facilitate discussions
                        on international trade, monetary policy, and market
                        dynamics, enhancing collective understanding.
                      </li>
                    </div>
                  </h6>

                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://medium.com/umd-iefs-online-content/economics-of-vaccine-development-382b330c93b"
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* WMUC */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden"
                    href="https://www.wmuc.umd.edu"
                  >
                    WMUC Radio
                  </UnderlineLink>
                  <UnderlineLink
                    className="leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline"
                    href="https://www.wmuc.umd.edu"
                  >
                    WMUC Radio
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                  <div>Web Dev Volunteer</div>
                    <div>August 2020 - January 2021</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    {" "}
                    <div className="ml-6">
                      <li>
                      Worked with a team of UMD students and some members of the IT department to remodel the UI and backend of the WMUC website 
                      </li>
                      <li>
                      Introduction to JavaScript, Node.js, Ghost APIs, and GitLab.
                      </li>
                    </div>
                  </h6>

                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://www.wmuc.umd.edu"
                    >
                      Check it Out
                    </ArrowLink>
                  </div>


                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
