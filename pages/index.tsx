import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'components/Head';
import NavItems from 'components/NavItems';
import SectionIndicator from 'components/SectionIndicator';
import SocialMedia from 'components/SocialMedia';
import ContactItem from 'components/ContactItem';
import SectionTitle from 'components/SectionTitle';
import AboutBadge from 'components/AboutBadge';
import aboutBadges from 'components/AboutBadge/badges';
import projects from 'components/ProjectItem/projects';
import ProjectItem from 'components/ProjectItem';

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
            <h2 className='text-4xl font-bold mb-3'>
              <span className='font-montserrat dark:text-white'>
                I&apos;m a{' '}
              </span>
              <span className='text-purple-500 font-poppins'>
                Software Engineer.
              </span>
            </h2>
            <p className='text-lg text-gray-700 w-full md:w-3/4 lg:w-1/2 font-montserrat dark:text-gray-300'>
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
        className='min-h-screen relative overflow-hidden flex items-center md:max-w-[calc(100%-80px)] md:ml-20'
      >
        <div className='container flex flex-col px-8 lg:px-16 lg:flex-row'>
          <div className='flex-1 order-2 lg:order-1'>
            <SectionTitle>About Me</SectionTitle>
            <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
              Hello! My name is Kadek Sastrawan, I&apos;m a fresh graduate and
              self-taught software engineer that&apos;s passionate about
              programming since in highschool. It started when I randomly bought
              a programming book and try all of the provided examples, turns out
              it was really fun and I feel like I can make anything with
              programming.
            </p>
            <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
              Long story short, I&apos;ve been learning some languages and
              technologies, I also did a freelance job while studying in
              college. My main focus now is to keep widening my knowledge by
              learning the cutting-edge technology and applying it by developing
              a meaningful application.
            </p>
            <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
              Recently I was interested in learning NLP, machine learning, and
              deep learning. I learned it for about a year or so and publish a{' '}
              <a
                href='https://www.sciencedirect.com/science/article/pii/S2405959521001375'
                target='_blank'
                rel='noreferrer'
                className='text-purple-500'
              >
                research paper
              </a>{' '}
              that uses deep learning methods.
            </p>
            <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
              Here are some technologies that I&apos;ve used and worked with
              recently:
            </p>
            <div className='flex flex-wrap'>
              {aboutBadges.map((v) => (
                <AboutBadge key={v.url} {...v} />
              ))}
            </div>
          </div>
          <div className='mb-16 flex-1 flex items-center justify-center order-1 lg:order-2 lg:mb-0'>
            <div className='relative h-60 w-60 lg:h-80 lg:w-80'>
              <Image
                src='/images/me.jpg'
                alt='Myself'
                layout='fill'
                className='rounded-md grayscale transition-all duration-500 hover:grayscale-0'
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id='project'
        className='min-h-screen relative overflow-hidden flex items-center md:max-w-[calc(100%-80px)] md:ml-20'
      >
        <div className='container px-8 lg:px-16'>
          <SectionTitle>The Project that I&apos;ve Developed</SectionTitle>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1 lg:pr-4'>
              {projects.slice(0, Math.ceil(projects.length / 2)).map((v) => (
                <ProjectItem key={v.name} {...v} />
              ))}
            </div>
            <div className='flex-1 lg:pl-4'>
              {projects.slice(Math.ceil(projects.length / 2)).map((v) => (
                <ProjectItem key={v.name} {...v} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
