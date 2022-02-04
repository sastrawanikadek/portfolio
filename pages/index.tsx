import Image from 'next/image';
import Head from 'components/Head';
import NavItems from 'components/NavItems';
import SectionIndicator from 'components/SectionIndicator';
import SocialMedia from 'components/SocialMedia';
import type { NextPage } from 'next';
import ContactItem from 'components/ContactItem';
import SectionTitle from 'components/SectionTitle';

const sections = ['about', 'project', 'publication', 'contact'];

const Home: NextPage = () => {
  return (
    <div className='relative overflow-x-hidden dark:bg-slate-800'>
      <Head
        title='Kadek Sastrawan | Software Engineer'
        description='I am a Software Engineer that is passionate with programming and loves to develop meaningful applications'
      />
      <header className='absolute w-full px-8 sm:px-24 pt-8 flex justify-end z-30 font-poppins'>
        <nav className='ml-1 flex-none'>
          <ul className='flex'>
            <NavItems sectionIds={sections} />
          </ul>
        </nav>
      </header>
      <div className='fixed h-full w-20 hidden flex-col z-50 md:flex'>
        <div className='flex-1' />
        <SectionIndicator sectionIds={sections} />
        <div className='flex-1 flex flex-col items-center justify-end after:h-16 after:w-[1px] after:bg-black dark:after:bg-gray-200'>
          <SocialMedia type='github' name='sastrawanikadek' />
          <SocialMedia type='linkedin' name='sastrawanikadek' />
        </div>
      </div>
      <figure className='absolute h-[calc(100vh/1.5)] w-2/4 -top-1/4 -left-1/4'>
        <div className='relative h-full w-full'>
          <Image src='/images/hero-top-blob.svg' alt='Blob' layout='fill' />
        </div>
      </figure>
      <section className='h-screen relative overflow-hidden md:max-w-[calc(100%-80px)] md:ml-20'>
        <div className='container relative px-8 lg:px-16 flex items-center h-full z-20 md:flex-col'>
          <div className='flex-1 hidden md:flex' />
          <div className='w-full flex-1'>
            <h3 className='text-2xl text-gray-500 dark:text-gray-200 mb-3 font-montserrat'>
              Hello, my name is
            </h3>
            <h1 className='text-6xl dark:text-white font-bold mb-3 font-poppins'>
              Kadek Sastrawan
            </h1>
            <h2 className='text-4xl text-purple-500 font-bold mb-3'>
              <span className='font-montserrat dark:text-white'>
                I&apos;m a{' '}
              </span>
              <span className='text-purple-500 font-poppins'>
                Software Engineer.
              </span>
            </h2>
            <p className='text-lg text-gray-400 w-full md:w-3/4 lg:w-1/2 font-montserrat dark:text-gray-300'>
              I&apos;m focused on web and mobile development both front-end and
              back-end. Currently have an interest in NLP, machine learning, and
              deep learning.
            </p>
            <a
              href='#contact'
              className='group relative overflow-hidden mt-8 inline-block rounded-md border-2 border-solid border-purple-500 py-3 px-6'
            >
              <span className='absolute h-full w-full top-0 left-0 bg-purple-500 transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0' />
              <span className='relative text-purple-500 text-lg font-bold transition duration-300 ease-in-out group-hover:text-white font-montserrat'>
                Get in Touch
              </span>
            </a>
          </div>
          <div className='w-full hidden flex-1 items-end divide-x md:flex'>
            <ContactItem type='email' value='sastrawanikadek@gmail.com' />
            <ContactItem type='phone' value='+6281-916-984-360' />
            <ContactItem type='location' value='Bali, Indonesia' />
          </div>
        </div>
        <figure className='absolute hidden lg:block md:h-2/3 sm:w-2/4 bottom-0 right-8 z-10'>
          <div className='relative h-full w-full'>
            <Image
              src='/images/hero.svg'
              alt='Coding Illustration'
              layout='fill'
              priority={true}
            />
          </div>
        </figure>
        <figure className='absolute hidden sm:block md:h-2/3 md:w-2/4 -bottom-16 -right-40'>
          <div className='relative h-full w-full'>
            <Image src='/images/hero-blob.svg' alt='Blob' layout='fill' />
          </div>
        </figure>
      </section>
      <section
        id='about'
        className='relative overflow-hidden md:max-w-[calc(100%-80px)] md:ml-20'
      >
        <div className='container flex py-56 px-8 lg:px-16'>
          <div className='flex-1'>
            <SectionTitle>About Me</SectionTitle>
            <p className='w-full font-montserrat text-base text-gray-400 mb-4 dark:text-gray-300 '>
              Hello! My name is Kadek Sastrawan, I&apos;m a fresh graduate and
              self-taught software engineer that&apos;s passionate about
              programming since in highschool. It started when I randomly bought
              a programming book and try all of the provided examples, turns out
              it was really fun and I feel like I can make anything with
              programming.
            </p>
            <p className='w-full font-montserrat text-base text-gray-400 mb-4 dark:text-gray-300 '>
              Long story short, I&apos;ve been learning some languages and
              technologies, I also did a freelance job while studying in
              college. My main focus now is to keep widening my knowledge by
              learning the cutting-edge technology and applying it by developing
              a meaningful application.
            </p>
          </div>
          <div className='flex-1'></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
