import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';
import Particles from './components/particles';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0xd27d2d,
          points: 9.0,
          maxDistance: 15.0,
          spacing: 20.0,
          backgroundAlpha: 0,
          scale: 1.0,
          scaleMobile: 1.0,
          THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Seo templateTitle="Home" />
      <main>
        <section className="min-h-screen" ref={vantaRef}>
          <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <nav className="my-16 animate-fade-in">
              <ul className="flex items-center justify-center gap-4">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </ul>
            </nav>
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
              Aarti Itikirala
            </h1>
            <div className="my-16 text-center animate-fade-in">
              <h2 className="text-sm text-zinc-500 ">
                I'm building{' '}
                <Link href="https://github.com/aitikirala">
                  <a className="underline duration-500 hover:text-zinc-300" target="_blank">
                    aitikirala
                  </a>
                </Link>{' '}
                a personal portfolio to showcase my works.
              </h2>
            </div>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
