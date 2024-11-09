import React from 'react';
import Header from './components/Header/header';
import Image from 'next/image';

function page() {
  return (
    <div className='bg-white pb-[3px] border-[1px] place-self-center justify-self-center shadow-md'>
      <Header/>
      <div className='flex'>
        <div className='right-section'>
          <h1 className='
        w-[496px] 
        h-[189px] 
        mt-[182px] 
        ml-[176px] 
        text-[40px] 
        leading-[65.8px] 
        font-bold 
        tracking-[2.5%] 
        font-libre 
        text-[#000000]'
        >IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <div className='
        w-[902px]
        h-[147px]
        mt-[28px]
        ml-[171px]
        '>
          <p className='
        w-[902px]
        h-[147px]
        font-libre
        font-medium
        text-[30px]
        leading-[49.35px]
        tracking-[2.5%]
        text-[#787054]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p></div>
        <button className='
        w-[288px]
        h-[58px]
        mt-[50px]
        ml-[176px]
        rounded-[10px]
        p-[10px]
        gap-[10px]
        bg-[#A29875]
        '>
          <p className='
          w-[177px]
          h-[38px]
          font-libre
          font-medium
          text-[30px]
          leading-[37.5px]
          text-[#FFFFFF]
          '>Explore now</p>
        </button>
      </div>
      <div className='relative mt-[28px] ml-6 '>
        <div className='absolute w-[442px] h-[611px] mt-[28px] ml-6 border-[1px] border-white rounded-tl-[150px] rounded-br-[150px] '></div>
        <Image className='
        rounded-tl-[150px] 
        rounded-br-[150px]
        '
        src={'/images/slider1.svg'} 
        alt={'Picture'}
        width={490}
        height={667}
   />
        </div> 
     </div> 
    </div>
  )
}

export default page;
