import * as React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Seo from '@/components/Seo';
import NextImage from '@/components/NextImage';

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
          {/* <div className='align-top justify-items-start w-80 h-24'>
          <Image
              src='/images/tomname3.png'
              alt='crithead'
              width='1000'
              height='300'
              className='aspect-auto p-30'
              />
            </div> */}
          <div className='h-12' />
          <div className='flex flex-col justify-self-center items-center'>
            <NextImage
              useSkeleton
              className='aspect-auto duration-600 hover:scale-[.99] p-30 / justify-items-center drop-shadow ease-in-out md:w-64'
              src='/images/bigdither.svg'
              width='1000'
              height='10000'
              alt='Icon'
            />
            <div className='w-64 h-64' />
            {/* <NextImage
                  useSkeleton='true'
                  className='p-30  aspect-auto drop-shadow hover:scale-[.96] duration-150 ease-in'
                  src='/images/designimg260.svg'
                  width='1000'
                  height='10000'
                  alt='graphicdesign'
                /> */}
          </div>

          <div className='w-96 h-96' />
          <div className='w-96 h-96' />
          <div className='w-96 h-96' />
        </section>

        <section className='self-center bg-gradient-to-tr from-cyan-700 via-indigo-400 to-blue-800'></section>
      </main>
    </Layout>
  );
}
