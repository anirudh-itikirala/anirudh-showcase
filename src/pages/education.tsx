import clsx from "clsx";
import * as React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";

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
          <div className="layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12">
            <div className="mt-16 flex w-full flex-col">
              {/* WILMINGTON UNIVERSITY PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="#"
                  >
                    Wilmington University
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>Bachelors in Computer Science</div>
                    <div>Nov 2024 - Present (45 credits)</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    Courses taken:
                    <div className="ml-6">
                      <li>Intro to Python</li>
                      <li>Object Oriented Programming</li>
                      <li>Networks</li>
                      <li>Survey Mathematics</li>
                      <li>Public Speaking</li>
                    </div>
                  </h6>
                </div>
              </div>

              {/* FOOTBALL PLAYER PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="#"
                  >
                    SportsMate360
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl">
                    <div>Football Player</div>
                    <div>May 2024 - Nov 2024</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    One of my passions is playing soccer and, as an extracurricular to my academics, I pursue a lot of soccer-related activities. I got selected to be part of a 6-month competitive overseas soccer program where I:
                    <div className="ml-6">
                      <li>Maintained a disciplined routine by waking up early to adhere to a strict diet and training schedule at the academy</li>
                      <li>Consistently followed tailored workout plans and went on daily runs to enhance performance</li>
                      <li>Participated in weekly scrimmages against professional academies, honing skills and gaining valuable competitive experience</li>
                    </div>
                  </h6>
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
