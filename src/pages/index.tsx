import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
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
            <p className='hover-shadow2xl hover:scale-[1.05] text-shadow-2xl text-slate-900 / text-5xl font-light duration-200 ease-in select-all'>
              {' '}
              design / software{' '}
            </p>
            <div className='w-6 h-6' />
            <p className='text-slate-400 / font-mono text-4xl'>
              {' '}
              -------------------------------------------{' '}
            </p>
            <div className='w-12 h-12' />

            <div className='... / flex flex-row space-x-5 h-2'>
              <div>
                <a href='https://github.com/roastBeefKazenakis/'>
                  <img
                    src='/images/githubbutton.png'
                    className='duration-400 hover:scale-[1.07] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </a>
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
                <a href='mailto:sabinowitz@gmail.com'>
                  <img
                    src='/images/emailbutton.png'
                    className='duration-400 hover:scale-[1.04] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </a>
              </div>
              <div>
                <a href='/ThomasSabinoBenowitzresume.pdf'>
                  <img
                    src='/images/resumebutton2.png'
                    className='duration-400 hover:scale-[1.11] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </a>
              </div>
              <div>
                <a href='https://twitter.com/sabinowitz'>
                  <img
                    src='/images/twitterbutton3.png'
                    className='duration-400 hover:scale-[1.06] max-w-6 / h-auto shadow-none transition ease-in-out'
                    alt=''
                    width='200'
                    height='200'
                  />
                </a>
              </div>
            </div>

            <div className='w-96 h-96' />

            <div className='w-96 h-96' />
            <div className='w-96 h-96' />
          </div>
        </section>
        <section className='self-center bg-gradient-to-tr from-cyan-700 via-indigo-400 to-blue-800'></section>
      </main>
    </Layout>
  );
}
