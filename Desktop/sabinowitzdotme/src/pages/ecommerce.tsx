import * as React from 'react';

import clsx from 'clsx';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Image from 'next/image';
import Seo from '@/components/Seo';
import {AiFillShopping} from "react-icons/ai"

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function ApotheosisPage() {

    const useCases = [
        {title: "Ecommerce", icon:AiFillShopping, description:"unified eCommerce payment", href:"#"},
        {title: "Ecommerce", icon:AiFillShopping, description:"unified eCommerce payment", href:"#"},
        {title: "Ecommerce", icon:AiFillShopping, description:"unified eCommerce payment", href:"#"},
        {title: "Ecommerce", icon:AiFillShopping, description:"unified eCommerce payment", href:"#"},
        {title: "Ecommerce", icon:AiFillShopping, description:"unified eCommerce payment", href:"#"},
    ]
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
          <header className = "flex items-center px-4 py-3 border-bold"> 
            <img className = "rounded-full h-7 w-7"></img>
          </header>

        <section className='self-center bg-gradient-to-tr from-cyan-700 to-blue-800 via-indigo-400'>
        <div className='flex flex-col items-center justify-self-center '>
        <div className = 'w-96 h-96' />
        <Image
                  src='/images/redlogo1.png'
                  alt='crithead'
                  width='1123'
                  height='390'
                  className='p-30  aspect-auto drop-shadow hover:scale-[1.02] duration-200 ease-in hover:shadow-4xl'
                />
                            <p className='text-6xl font-light text-blue-900 hover:scale-[1.05] duration-200 ease-in text-shadow-2xl select-all'> Cultural Criticism</p>
                            <div className = 'w-96 h-96' />
                            <div className = 'w-96 h-96' />
                            <p className = 'text-xl font-light text-blue-900/[.75] hover:scale-[1.10] opacity-[1]'> "Culture has reached its apotheosis recently, how else can it be explained that people have gone from artists and writers, to then creatives, to now Creators... that media has gone from the Mcluhanish ' message' to now an edenic "ecosystem" or "landscape" </p>
                            <div className = 'w-96 h-96' />
         </div>

          
        </section>
        <section className='self-center bg-gradient-to-tr from-cyan-700 to-blue-800 via-indigo-400'>
          
          </section>
      </main>
    </Layout>
  );
}