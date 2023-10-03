import Blob from './components/Blob';
import EmailModal from './components/EmailModal';
import Stat from './components/Stat';
import devices from '@/public/devices.svg';
import chatBot from '@/public/chatBot.svg';
import searchBar from '@/public/searchBar.png';
import table from '@/public/Table.svg';
import Step from './components/Step';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='px-4 lg:px-8'>
        <main className='text-center lg:flex lg:gap-8 lg:items-center lg:max-w-7xl mx-auto'>
          <div className='max-w-sm mx-auto lg:max-w-none lg:mx-0 relative lg:w-1/2'>
            <Blob className='-left-24 -top-36 lg:hidden' />
            <Blob className='-right-24 -bottom-24 rotate-180 w-2/3 lg:hidden' />
            <h1 className='whitespace-nowrap lg:whitespace-normal font-bold text-3xl md:text-4xl lg:text-5xl z-10 lg:text-left'>
              <span className='block -mb-1 z-10 lg:text-left'>Prospect</span>
              <span className='inline lg:text-left'>with confidence.</span>
            </h1>
            <p className='text-sm text-slate-600 mt-3 mb-6 md:text-base md:leading-4 lg:text-lg lg:leading-5 lg:text-left'>
              Grizz is a lead generation platform designed to assist sales
              individuals prospect into companies with confirmed technology
            </p>
            <div className='lg:flex'>
              <EmailModal />
            </div>
            <div className='flex justify-center lg:justify-start mt-4'>
              <Stat
                description='Faster than doing manual data collection'
                stat='90%'
                className='border-r'
              />
              <Stat
                description='Search for over 10 keywords at one time'
                stat='10+'
              />
            </div>
          </div>
          <div className='w-2/3 lg:block hidden'>
            <Image
              src={table}
              alt='Data table'
              className='border shadow-lg -rotate-6'
            />
          </div>
        </main>
        <section className='text-center mb-12 max-w-md mx-auto lg:max-w-3xl'>
          <h2 className='my-5 font-bold text-xl lg:text-3xl lg:mt-20'>
            How it works
          </h2>
          <div className='flex flex-col gap-6 relative lg:flex-row lg:justify-center'>
            <Step
              image={searchBar}
              description='With up to 12 keywords, find only listings with the data you need'
              headline='Enter keywords'
              className='w-10/12 lg:w-3/4'
            />
            <Step
              image={chatBot}
              description='wait as our bots search the most popular job sites for qualified leads'
              headline='Find listings'
              reverse={true}
              className='w-3/4'
            />
            <Step
              image={devices}
              description='prospect knowing the data is reliable and detailed'
              headline='Prospect away'
              className='w-10/12 lg:w-1/2'
            />
          </div>
        </section>
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
