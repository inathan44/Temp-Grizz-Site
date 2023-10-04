import Blob from './components/Blob';
import EmailModal from './components/EmailModal';
import Stat from './components/Stat';
import devices from '@/public/devices.svg';
import chatBot from '@/public/chatBot.svg';
import searchBar from '@/public/searchBar.png';
import dataProcessing from '@/public/dataProcessing.svg';
import table from '@/public/Table.svg';
import Step from './components/Step';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='px-4 lg:px-12 overflow-x-hidden'>
        <main className='text-center lg:flex lg:gap-8 lg:items-center lg:max-w-5xl mx-auto'>
          <div className='max-w-sm mx-auto lg:max-w-none lg:mx-0 relative lg:w-2/3'>
            <div>
              <Blob className='-left-24 -top-20 lg:hidden' />
              <Blob className='-right-24 -bottom-24 rotate-180 w-2/3 lg:hidden' />
            </div>
            <h1 className='whitespace-nowrap lg:whitespace-normal font-bold text-3xl md:text-4xl lg:text-5xl z-10 lg:text-left'>
              <span className='block -mb-1 z-10 lg:text-left'>Prospect</span>
              <span className='inline lg:text-left'>with confidence.</span>
            </h1>
            <p className='text-sm text-slate-600 mt-3 mb-6 md:text-base md:leading-4 lg:text-lg lg:leading-5 lg:text-left'>
              Grizz is a lead generation platform designed to assist sales
              professionals in finding new prospects with confirmed technology.
            </p>
            <div className='lg:flex'>
              <EmailModal />
            </div>
          </div>
          <div className='w-full hidden lg:flex justify-center items-center'>
            <Image
              src={dataProcessing}
              alt='Data table'
              className='w-3/4 hidden lg:flex justify-center items-center'
            />
          </div>
        </main>
        <div className='lg:text-left mt-6 max-w-5xl mx-auto w-2/3 text-center'>
          <p className='text-sm text-slate-600 mt-6 mb-6 md:text-base md:leading-4 lg:text-lg lg:leading-5 lg:text-left'>
            Different than other data providers, we supply the qualitative data
            associated with our technology confirmation, allowing you to be
            confident in your outreach efforts.
          </p>
        </div>
        <div className='lg:max-w-5xl mx-auto'>
          <section className='text-center mb-12 max-w-lg mx-auto lg:max-w-none'>
            <h2 className='my-5 font-bold text-xl lg:text-3xl lg:mt-16'>
              How it works
            </h2>
            <div className='flex flex-col gap-6 relative lg:flex-row lg:justify-between'>
              <Step
                headline='Enter'
                image={searchBar}
                description='Enter technology stack and other characteristics of your ideal customer profile'
                className='w-10/12 lg:w-3/4'
              />
              <Step
                headline='Identify'
                image={chatBot}
                description='Our algorithm will identify prospects and organizational insights'
                reverse={true}
                className='w-3/4'
              />
              <Step
                headline='Prospect'
                image={devices}
                description='Take the information provided and prospect away!'
                className='w-10/12 lg:w-1/2'
              />
            </div>
          </section>
        </div>
        <section className='flex justify-center flex-col items-center gap-6 mb-12'>
          <h4 className='font-semibold text-xl  lg:text-3xl'>
            Platform release coming soon...
          </h4>
          <EmailModal />
        </section>
      </div>
    </>
  );
}
