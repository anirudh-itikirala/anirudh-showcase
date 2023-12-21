import clsx from 'clsx';
import * as React from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

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
              {/* Campus Connector */}
              <div className='pane'>
                <div className='w-5/6 pt-12 text-left md:w-2/5'>
                  <UnderlineLink
                    className='leading-1 prose text-left text-[2.5rem] font-semibold leading-10 dark:prose-invert sm:text-5xl'
                    href='https://www.plateplanner.org/'
                  >
                    Campus Connector
                  </UnderlineLink>
                  <br />
                  <h1 className='prose prose-xl mt-2 text-xl dark:prose-invert md:text-3xl'>
                    September 2022 - December 2022
                  </h1>
                </div>
                <div className='prose prose-lg w-5/6 pt-2 text-left tracking-tight dark:prose-invert md:prose-xl lg:prose-2xl md:w-2/5 md:pt-12'>
                  <h6>
                    Developed a React-based website with Redux for state
                    management to generate personalized meal plans based on
                    user's food preferences and schedule.
                    <div className='ml-6'>
                      <li>
                        Integrated multiple APIs to access 365,000 recipes and
                        nutrition databases, implementing caching to optimize
                        load times and reduce API calls.
                      </li>
                      <li>
                        Engineered a RESTful backend server & relational
                        database using Django and MySQL, enabling users to log
                        in and store favorited meals.
                      </li>
                      <li>
                        Utilized a modern tech stack including JavaScript,
                        React, Python, SQL, JavaScript, HTML, CSS, MySQL,
                        Django, Git, and Redux to create a user-friendly
                        experience.
                      </li>
                    </div>
                  </h6>
                  <div className='flex w-full justify-end'>
                    <ArrowLink
                      className='text-sm'
                      href='https://github.com/ahluwalij/plateplanner-meal-generator'
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
