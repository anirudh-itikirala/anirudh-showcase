import clsx from "clsx";
import * as React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";

export default function Projects() {
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

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [popCard, setPopCard] = React.useState("hidden");
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard("inline-block");
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle="Projects" />
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
              {/* Budget Planner Program */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://github.com/anirudh-itikirala/anirudh_budget_planner"
                  >
                    Budget Planner Program
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl">
                    Sep 2023 – Jan 2024
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    Designed and implemented a Python-based budget planner that dynamically allocates a weekly budget based on a user-defined monthly budget and estimated outings.
                    <div className="ml-6">
                      <li>
                        Integrated an automatic rollover feature for unused funds, enabling flexible spending management. Developed a user-friendly interface for logging expenses, adjusting allocations, and tracking financial insights in real time.
                      </li>
                      
                    </div>
                  </h6>
                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://github.com/anirudh-itikirala/anirudh_budget_planner"
                    >
                      See the repository
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* Hotel Management Tool */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="https://github.com/anirudh-itikirala/hotel-management-tool"
                  >
                    Hotel Management Tool
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl">
                    Jan 2025 – Present
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    Developed a JavaFX-based event management system for Rosewood Farms to optimize seating arrangements, inventory tracking, and customer feedback analytics.
                    <div className="ml-6">
                      <li>
                        Designed a user-friendly interface to enhance event logistics, reducing setup time and improving operational efficiency.
                      </li>
                      <li>
                        Integrated dynamic UI components and data tracking mechanisms to streamline farm event coordination.
                      </li>
                      
                    </div>
                  </h6>
                  <div className="flex w-full justify-end">
                    <ArrowLink
                      className="text-sm"
                      href="https://github.com/anirudh-itikirala/hotel-management-tool"
                    >
                      See the repository
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
