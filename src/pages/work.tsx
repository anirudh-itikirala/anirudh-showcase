import clsx from "clsx";
import * as React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";

export default function Work() {
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
      <Seo templateTitle="Work Experience" />
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
              {/* EDDIE’S LAWN CARE PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="#"
                  >
                    Eddie’s Lawn Care
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Manager</div>
                    <div>Mar 2024 – Present</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    <li>
                      Supervised and optimized operational workflows for
                      landscaping and maintenance services by developing
                      scheduling automation and tracking tools using Python
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Implemented data-driven marketing strategies by analyzing
                      customer demographics and referral trends, leveraging
                      Python for trend analysis and targeting efficiency
                      (Resulting in a 40% client retention rate)
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Developed a Python-based tool to optimize sales and
                      automate client scheduling, improving efficiency by 30%
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Assisted the owner in managing key projects and
                      operational workflows
                    </li>
                  </h6>
                  
                </div>
              </div>

              {/* ROSEWOOD FARMS PANE */}
              <div className="pane">
                <div className="w-5/6 pt-12 text-left md:w-2/5">
                  <UnderlineLink
                    className="leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl"
                    href="#"
                  >
                    Rosewood Farms
                  </UnderlineLink>
                  <br />
                  <h1 className="prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl">
                    <div>Server and Floor Lead</div>
                    <div>Nov 2023 – May 2024</div>
                  </h1>
                </div>
                <div className="prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12">
                  <h6>
                    <li>
                      Developed a JavaFX-based seating arrangement application
                      to optimize table placements, improving event setup
                      efficiency by 20%
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Implemented an inventory tracking system in Java to
                      streamline event decorations and food service logistics
                    </li>
                  </h6>
                  <h6>
                    <li>
                      Utilized customer feedback analytics to enhance service
                      responsiveness and guest satisfaction
                    </li>
                  </h6>
                
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
