import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/links/ArrowLink';

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
  const [popCard, setPopCard] = React.useState('hidden');
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard('inline-block');
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle='Education' />
      <main>
        <section
          className={clsx(
            'bg-white transition-all dark:bg-dark',
            fade ? 'opacity-100' : 'opacity-0'
          )}
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 '>
            <div className='mt-36 flex w-full flex-col'>
              {/* UMD PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden'
                    href='https://www.cs.umd.edu/'
                  >
                    UMD
                  </UnderlineLink>
                  <UnderlineLink
                    className='leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline'
                    href='https://www.cs.umd.edu/'
                  >
                    UMD College Park
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl'>
                    <div>BS in Computer Science</div>
                    <div>August 2020 - May 2024</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Courses taken during my time at the University of Maryland -
                    College Park:
                    <div className='ml-6'>
                      <li>Object Oriented Programming (Java)</li>
                      <li>Advanced Data Structures (Java)</li>
                      <li>
                        Functional Programming/Data Structures (Rust, OCaml,
                        Ruby)
                      </li>
                      <li>Advanced Linear Algebra</li>
                      <li>Discrete Structures (Mathematical reasoning, combinatorics, trees, discrete probability.)</li>
                      <li>Computer System Organization (C/C++)</li>
                      <li>
                        Practical Tools for Data Science (SQL, Tableau, Python)
                      </li>
                      <li>App Development (Kotlin, Swift)</li>
                      <li>Compilers (C, Racket) </li>
                      <li>Algorithms</li>
                      <li> Applied Probability and Statistics (R, SAS, ANOVA, Hypothesis Testing) </li>
                    </div>
                  </h6>
                </div>
              </div>
              {/* Honors Humanities */}
              <div className='pane'>
              <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:hidden'
                    href='https://www.cs.umd.edu/'
                  >
                    Honors College
                  </UnderlineLink>
                  <UnderlineLink
                    className='leading-1 prose hidden w-fit text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl xl:inline'
                    href='https://www.cs.umd.edu/'
                  >
                    Honors Humanities
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-3xl'>
                    <div>Capstone Holder</div>
                    <div>August 2020 - Present</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    <div className='ml-6'>
                    <li>
                      Developed an informative website that explores the ethical implications of artificial intelligence, presenting well-researched content on the moral considerations, societal impacts, and potential future developments in the field of AI.
                      </li>
                      <li>
                      Conducted a thorough analysis of sacred texts pivotal to Hinduism and composed a reflective narrative on the influence of Hindu teachings in providing resilience and guidance to my family during challenging times.
                      </li>
                    </div>
                  </h6>

                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://aartificialintelligence.mailchimpsites.com'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>

              {/* I4C Student Advisory Board */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <h1 className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert min-[470px]:hidden sm:text-5xl'>
                  I4C Student Advisory Board 
                  </h1>
                  <h1 className='leading-1 prose hidden text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert min-[470px]:inline sm:text-5xl'>
                  I4C Student Advisory Board 
                  </h1>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    August 2020 - May 2021
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Engineered a CNN to detect/distinguish between malicious
                    malaria strains/cells in images using Python, Tensorflow,
                    Keras, Seaborn, Neural Networks, Computer Vision, and Google
                    Colab.
                    <div className='ml-6'>
                      <li>
                        Trained neural network against a dataset of 100,000
                        archived images from compiled research.
                      </li>
                      <li>
                        Collaborated with a multidisciplinary team to optimize
                        the CNN's performance and accuracy, achieving a 85%
                        success rate in identifying malaria strains.
                      </li>
                      <li>
                        Presented research findings to faculty and fellow
                        students, sparking interest in further development and
                        collaboration.
                      </li>
                    </div>
                  </h6>
                  {}
                </div>
              {/* International Economics and Finance Society*/}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <h1 className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert min-[470px]:hidden sm:text-5xl'>
                    BigTh!nk AI
                  </h1>
                  <h1 className='leading-1 prose hidden text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert min-[470px]:inline sm:text-5xl'>
                    BigTh!nk AI Club
                  </h1>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    August 2022 - Current
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                  Research and analyze global economic trends and financial news, providing insightful commentary on current affairs both domestically and internationally.
                    <div className='ml-6'>
                      <li>
                      Contribute to the society's mission by preparing presentations and reports that drive conversations on economic stability and growth prospects.
                      </li>
                      <li>
                      Publish well-crafted articles on Medium, elucidating complex economic concepts and their real-world implications for a diverse readership.
                      </li>
                      <li>
                      Collaborate with club members to facilitate discussions on international trade, monetary policy, and market dynamics, enhancing collective understanding.
                      </li>
                    </div>
                  </h6>
                  {}
                </div>

                <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href=' https://medium.com/umd-iefs-online-content/economics-of-vaccine-development-382b330c93b'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
              </div>
              {/* WMUC */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose w-min text-left text-[1.8rem] font-semibold leading-10 dark:prose-invert sm:text-4xl md:text-5xl lg:hidden'
                    href='https://www.wmuc.umd.edu'
                  >
                    Johns Hopkins BMEI
                  </UnderlineLink>
                  <UnderlineLink
                    className='leading-1 prose hidden w-min text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl lg:block'
                    href='https://ei.jhu.edu/programs/bmei-online/'
                  >
                    Johns Hopkins BioEngineering
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    Sept 2020 - Jan 2021
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Modeled systems using engineering principles to solve
                    biological, physiological, and/or medical design problems
                    over a six-week period.
                    <div className='ml-6'>
                      <li>
                        Developed a prototype for a wearable device that
                        monitors vital signs and alerts healthcare providers of
                        any anomalies, demonstrating a deep understanding of
                        both hardware and software design principles.
                      </li>
                      <li>
                        Collaborated with a team of engineers and medical
                        professionals to ensure the prototype's functionality
                        and accuracy in real-world situations.
                      </li>
                      <li>
                        Presented project outcomes to a panel of experts and
                        received constructive feedback for further improvement
                      </li>
                    </div>
                  </h6>
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
