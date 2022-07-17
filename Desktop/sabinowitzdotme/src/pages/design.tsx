import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
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
        <div className = 'w-64 h-64' />
        {/* <NextImage
                  useSkeleton='true'
                  className='p-30  aspect-auto drop-shadow hover:scale-[.96] duration-150 ease-in'
                  src='/images/designimg260.svg'
                  width='1000'
                  height='10000'
                  alt='graphicdesign'
                /> */}
        
        <Image
                  src='/images/bigdither.svg'
                  alt='crithead'
                  width='1000'
                  height='10000'
                  className='hover:shadow-2xl p-30 aspect-auto '
                />   


       

                <p className='text-6xl font-light text-pink-800'>Thomas - Pink Polos </p>
                            <p className='text-3xl font-light text-blue-900 hover:scale-[1.01] duration-400 ease-in text-shadow-2xl select-all'> <a href='https://www.crit.tk/x/pinkpolos.mp3'>Mp3 download (right click - download file)</a></p>
                            <div className='items-center flex-auto mx-5 my-4 align-middle border-2 justify-self-center rounded-2xl w-96 h-96 bg-gradient-to-tr from-slate-800 to-gray-400'>
                            <div className="flex justify-center space-x-2">
                              
                            <Image
                  src= '/images/avatar.png'
                  alt='avatar'
                  width='320'
                  height='470'
                  className='hover:scale-[1.03] duration-300 ease-in aspect-auto shadow-2xl/'
                />   

                <button type="button" className="w-50 h-20 inline-block px-6 py-2.5 bg-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:scale-[1.04] duration-500 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 text-pink-400 active:shadow-lg transition ease-in-out"> <a className='my-4'> gaiaonline.com</a> </button>

                </div>
                </div>
              </div>
        

                            <div className = 'w-96 h-96' />
                            <div className = 'w-96 h-96' />
                            <div className = 'w-96 h-96' />
                            
         

</section>
 
        <section className='self-center bg-gradient-to-tr from-cyan-700 to-blue-800 via-indigo-400'>
          
</section>
      </main>
</Layout> 
  );
}
