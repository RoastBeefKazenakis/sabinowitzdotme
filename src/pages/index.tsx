import * as React from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from 'next/image';
import Seo from '@/components/Seo';
import Link from 'next/link';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='self-center bg-gradient-to-tr from-cyan-700 via-indigo-400 to-blue-800'>
          <div className='flex flex-col justify-self-center items-center'>
            <div className='w-72 h-72' />
            <Image
              src='/images/tomname3.png'
              alt='crithead'
              width='1333'
              height='225'
              className='aspect-auto hover:scale-[1.02] hover:shadow-4xl p-30 / drop-shadow duration-200 ease-in'
            />
            <p className='hover-shadow2xl text-shadow-2xl text-slate-100 / font-mono text-5xl subpixel-antialiased duration-200 ease-in select-all'>
              {' '}
              designer and  software developer{' '}
            </p>
            <div className='w-6 h-6' />
            <p className='text-slate-400 / font-mono text-4xl subpixel-antialiased'>
              {' '}
              --------------------------------------{' '}
            </p>
            <div className='w-12 h-12' />

            <div className='... / flex flex-row space-x-5 h-2'>
              <div>
                <Link href='https://github.com/roastBeefKazenakis/'>
                  <img
                    src='/images/githubbutton.png'
                    className='duration-400 hover:scale-[1.07] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </Link>
              </div>
              <div>
                <Link href='/design'>
                  <img
                    src='/images/designbutton.png'
                    className='duration-400 hover:scale-[1.03] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </Link>
              </div>
              <div>
                <Link href='mailto:sabinowitz@gmail.com'>
                  <img
                    src='/images/emailbutton.png'
                    className='duration-400 hover:scale-[1.04] max-w-12 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </Link>
              </div>
              <div>
                <Link href='/pdf/ThomasSabinoBenowitzresume.pdf'>
                  <img
                    src='/images/resumebutton2.png'
                    className='duration-400 hover:scale-[1.11] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </Link>
              </div>
              <div>
                <Link href='https://twitter.com/sabinowitz'>
                  <img
                    src='/images/twitterbutton3.png'
                    className='duration-400 hover:scale-[1.06] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </Link>
              </div>
            </div>

            <div className='w-80 h-80' />
            <div className='w-6 h-6' />
            <p className='text-slate-800 / text-5xl subpixel-antialiased text-opacity-90 animate-bounce'>
              <span className='text-opacity-35 / text-red-900'>⇩ ⇩ ⇩</span>
            </p>
            <p className='text-slate-800 / font-mono text-xl subpixel-antialiased animate-none'>
              Resume (scroll down)
            </p>
            <div className='w-2 h-2' />
            <p className='text-l text-slate-300 / subpixel-antialiased'>
              --Click to download PDF--
            </p>
            <div className='flex flex-auto mx-64 my-16'>
              <a href='/pdf/ThomasSabinoBenowitzresume.pdf' download='resume'>
                <Image
                  src='/images/resumesvg.svg'
                  className='duration-400 hover:scale-[.98] / inset-4 mx-12 my-12 transition ease-in-out'
                  alt=''
                  width='4000'
                  height='5177'
                />
              </a>
            </div>
            <div className='w-96 h-96' />
            <div className='w-96 h-96' />
          </div>
        </section>
        <section className='self-center bg-gradient-to-tr from-cyan-700 via-indigo-400 to-blue-800'></section>
      </main>
    </Layout>
  );
}
