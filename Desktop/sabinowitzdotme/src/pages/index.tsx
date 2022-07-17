import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from 'next/image';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='self-center bg-gradient-to-tr from-cyan-700 to-blue-800 via-indigo-400'>
        <div className='flex flex-col items-center justify-self-center '>
        <div className = 'w-72 h-72' />
        <Image
                  src='/images/tomname3.png'
                  alt='crithead'
                  width='1333'
                  height='225'
                  className='p-30  aspect-auto drop-shadow hover:scale-[1.02] duration-200 ease-in hover:shadow-4xl'
                />
                            <p className='text-5xl font-light text-slate-900 hover:scale-[1.05] hover-shadow2xl duration-200 ease-in text-shadow-2xl select-all'>  design / software  </p>
                            <div className = 'w-6 h-6' />
                            <p className='font-mono text-4xl text-slate-400'> ------------------------------------------- </p>
                            <div className = 'w-12 h-12' />
                            
                            <div class="flex flex-row h-2 space-x-5 ...">
                              <div>
                              <a href='https://github.com/roastBeefKazenakis/'><img
                                src="/images/githubbutton.png"
                                className="max-w-6 h-auto transition ease-in-out shadow-none hover:scale-[1.07] duration-400"
                                alt=""
                                width='200'
                                height='200'
                              />
                              </a>
                              </div>
                              <div><a href='/design'><img
                                src="/images/designbutton.png"
                                className="max-w-6 h-auto transition ease-in-out shadow-none hover:scale-[1.03] duration-400"
                                alt=""
                                width='200'
                                height='200'
                              /></a></div>
                              <div><a href='mailto:sabinowitz@gmail.com'><img
                                src="/images/emailbutton.png"
                                className="max-w-6 h-auto transition ease-in-out shadow-none hover:scale-[1.04] duration-400"
                                alt=""
                                width='200'
                                height='200'
                              /></a></div>
                              <div><a href='/ThomasSabinoBenowitzresume.pdf'><img
                                src="/images/resumebutton2.png"
                                className="max-w-6 h-auto transition ease-in-out shadow-none hover:scale-[1.11] duration-400"
                                alt=""
                                width='200'
                                height='200'
                              /></a></div>
                              <div><a href='https://twitter.com/sabinowitz'><img
                                src="/images/twitterbutton3.png"
                                className="max-w-6 h-auto transition ease-in-out shadow-none hover:scale-[1.06] duration-400"
                                alt=""
                                width='200'
                                height='200'
                              /></a></div>
                            </div>
                           
                            <div className = 'w-96 h-96' />
                            
                            <div className = 'w-96 h-96' />
                            <div className = 'w-96 h-96' />

         </div>

          
        </section>
        <section className='self-center bg-gradient-to-tr from-cyan-700 to-blue-800 via-indigo-400'>
          
          </section>
      </main>
    </Layout>
  );
}
