import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

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
  const [popCard, setPopCard] = React.useState('hidden');
  const [fade, setFade] = React.useState(false);

  const handleMenuClick = () => {
    setPopCard('inline-block');
    setFade(true);
  };

  return (
    <Layout>
      <Seo templateTitle='Work Experience' />
      <main>
        <section
          className={clsx(
            'bg-white transition-all dark:bg-dark',
            fade ? 'opacity-100' : 'opacity-0'
          )}
          ref={vantaRef}
        >
          <div className='layout relative flex min-h-screen flex-col items-start justify-start pt-6 text-center sm:pt-8 md:pt-10 lg:pt-12 '>
            <div className='mt-16 flex w-full flex-col'>
              {/* PEOPLE TECH PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://github.com/aitikirala/PTG-Custom-Connector'
                  >
                    People Tech Group
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl'>
                    <div>SWE Intern</div>
                    <div>May 2023 - August 2023</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                  Developed a Custom Github Connector: Leveraged AWS Lambda and App Flow to design and implement a custom Github connector, enabling seamless integration and automation of code repository workflows. Collaborated with cross-functional teams to ensure security, scalability, and efficiency.
                  </h6>

                  <h6>
                  Engineered a Workday Connector: Created a tailored Workday connector using AWS Lambda and App Flow, facilitating real-time data synchronization and automation between HR systems and internal applications. Led the process of testing, deployment, and ongoing support, contributing to improved operational efficiency
                    </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/aitikirala/PTG-Custom-Connector'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* UMD MATH COACH */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://beta.sellerchain.com'
                  >
                    University of Maryland
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-4 flex flex-col text-xl dark:prose-invert md:text-2xl'>
                    <div>Math Coach</div>
                    <div>June 2022 - August 2022</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>Conducted Weekly Sessions
                    <div className='ml-6'>
                      <li>
                      Detailed key calculus concepts at a designated UMD faculty building, providing comprehensive guidance to students and ensuring a robust understanding of intricate Calculus principles.
                      </li>
                        
                    </div>
                  </h6>

                  <h6>Facilitated Homework and Exam Preparation

                  <div className='ml-6'>
                      <li>
                      : Assisted students with challenging homework problems, tailored test preparation strategies to individual learning styles, and offered personalized tutoring sessions, leading to improved academic performance and enhanced comprehension among participants.
                      </li>
                        
                  </div>
                  </h6>
                  
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/files/sellerchain_recommendation'
                    >
                      CEO Recommendation
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* PROXYFARM PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://proxy-farm.com'
                  >
                    Proxyfarm
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 flex flex-col text-xl dark:prose-invert md:text-2xl'>
                    <div>Founding Engineer</div>
                    <div>January 2021 - August 2021</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Founded and developed a startup offering a scalable and
                    high-performance proxy service for web scraping, SEO tools,
                    and secure browsing.
                    <div className='ml-6'>
                      <li>
                        Developed a scalable backend for a proxy service
                        handling 10,000+ IPs, serving 100+ users monthly.
                      </li>
                      <li>
                        Processed high-volume traffic with Redis & REST APIs;
                        used Bash scripts to concurrently validate user limits.
                      </li>
                      <li>
                        Engineered a user & employee dashboard with NodeJS,
                        Websockets, MongoDB, Oauth2, HTML, CSS, & Chart.js.,
                        allowing employees to validate orders and set stock, and
                        clients to manage their subscriptions and access their
                        proxy credentials.
                      </li>
                      <li>
                        Achieved a 99.9% system uptime, displaying expertise in
                        high-reliability & optimizing resource allocation.
                      </li>
                      <li>
                        Managed business aspects, including marketing, sales,
                        and customer support, leading to a growing client base
                        and positive feedback
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://www.jasdeepahluwalia.com/experience/proxyfarm'
                    >
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </div>
              {/* THE BOT TRADE PANE */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert max-[393px]:w-min sm:text-5xl'
                    href='https://twitter.com/TheBotTrade'
                  >
                    The Bot Trade
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 flex flex-col text-xl dark:prose-invert md:text-3xl'>
                    <div>Administrator</div>
                    <div>January 2021 - September 2021</div>
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Consulted for a leading software trading and cryptocurrency
                    advisory firm, providing expert guidance to clients on
                    investment strategies, market trends, and risk management.
                    <div className='ml-6'>
                      <li>
                        Assessed client needs and delivered strategic investment
                        recommendations for development company ventures,
                        contributing to the success and growth of multiple
                        startups.
                      </li>
                      <li>
                        Directed a high-performing team of 10+ employees,
                        optimizing payroll and monitoring productivity to
                        achieve maximum efficiency and ensure consistent
                        delivery of expert advice to clients.
                      </li>
                      <li>
                        Established relationships with creators to create
                        partnerships, driving member engagement and fostering
                        long-term business growth through collaboration and
                        resource sharing.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://twitter.com/TheBotTrade'
                    >
                      Learn More
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
