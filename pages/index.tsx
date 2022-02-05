import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
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
import publications from 'components/PublicationItem/publications';
import PublicationItem from 'components/PublicationItem';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import 'aos/dist/aos.css';

const sections = ['about', 'project', 'publication', 'contact'];

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
    });
  }, []);

  return (
    <div className='relative overflow-hidden'>
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
        <div className='flex-1 flex flex-col items-center justify-end after:h-16 after:w-[1px] after:bg-gray-200'>
          <SocialMedia type='github' name='sastrawanikadek' />
          <SocialMedia type='linkedin' name='sastrawanikadek' />
        </div>
      </div>
      <figure
        data-aos='fade-down'
        data-aos-delay={100}
        data-aos-offset={0}
        className='absolute h-full max-h-[250vh] w-2/4 -top-1/4 -left-1/4'
      >
        <div className='relative h-full w-full'>
          <Image src='/images/hero-top-blob.svg' alt='Blob' layout='fill' />
        </div>
      </figure>
      <section className='h-screen relative overflow-hidden md:max-w-[calc(100%-80px)] md:ml-20'>
        <div className='container relative px-8 lg:px-16 flex items-center h-full z-20 md:flex-col'>
          <div className='flex-1 hidden md:flex' />
          <div className='w-full flex-1'>
            <h3
              data-aos='fade-down'
              data-aos-delay={200}
              className='text-2xl text-gray-200 mb-3 font-montserrat'
            >
              Hello, my name is
            </h3>
            <h1
              data-aos='fade-down'
              data-aos-delay={300}
              className='text-6xl text-white font-bold mb-3 font-poppins'
            >
              Kadek Sastrawan
            </h1>
            <h2
              data-aos='fade-down'
              data-aos-delay={400}
              className='text-4xl font-bold mb-3'
            >
              <span className='font-montserrat text-white'>I&apos;m a </span>
              <span className='text-purple-500 font-poppins'>
                Software Engineer.
              </span>
            </h2>
            <p
              data-aos='fade-down'
              data-aos-delay={500}
              className='text-lg w-full md:w-3/4 lg:w-1/2 font-montserrat text-gray-300'
            >
              I&apos;m focused on web and mobile development both front-end and
              back-end. Currently have an interest in NLP, machine learning, and
              deep learning.
            </p>
            <button
              data-aos='fade-up'
              data-aos-delay={600}
              className='group relative overflow-hidden mt-8 inline-block rounded-md border-2 border-solid border-purple-500 py-3 px-6'
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              <span className='absolute h-full w-full top-0 left-0 bg-purple-500 transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0' />
              <span className='relative text-purple-500 text-lg font-bold transition duration-300 ease-in-out group-hover:text-white font-montserrat'>
                Get in Touch
              </span>
            </button>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay={700}
            className='w-full hidden flex-1 items-end divide-x md:flex'
          >
            <ContactItem type='email' value='sastrawanikadek@gmail.com' />
            <ContactItem type='phone' value='+6281-916-984-360' />
            <ContactItem type='location' value='Bali, Indonesia' />
          </div>
        </div>
        <figure
          data-aos='zoom-in'
          data-aos-delay={900}
          className='absolute hidden lg:block md:h-2/3 sm:w-2/4 bottom-0 right-8 z-10'
        >
          <div className='relative h-full w-full'>
            <Image
              src='/images/hero.svg'
              alt='Coding Illustration'
              layout='fill'
              priority={true}
            />
          </div>
        </figure>
        <figure
          data-aos='fade-left'
          data-aos-delay={1000}
          className='absolute hidden sm:block md:h-2/3 md:w-2/4 -bottom-16 -right-40'
        >
          <div className='relative h-full w-full'>
            <Image src='/images/hero-blob.svg' alt='Blob' layout='fill' />
          </div>
        </figure>
      </section>
      <section
        id='about'
        data-aos='fade-down'
        data-aos-delay={100}
        className='min-h-screen relative overflow-hidden flex items-center mb-32 md:max-w-[calc(100%-80px)] md:ml-20 lg:mb-0'
      >
        <div className='container flex flex-col px-8 lg:px-16 lg:flex-row'>
          <div className='flex-1 order-2 lg:order-1'>
            <SectionTitle>About Me</SectionTitle>
            <p className='w-full font-montserrat text-base mb-4 text-gray-300'>
              Hello! My name is Kadek Sastrawan, I&apos;m a fresh graduate and
              self-taught software engineer that&apos;s passionate about
              programming since in highschool. It started when I randomly bought
              a programming book and try all of the provided examples, turns out
              it was really fun and I feel like I can make anything with
              programming.
            </p>
            <p className='w-full font-montserrat text-base mb-4 text-gray-300'>
              Long story short, I&apos;ve been learning some languages and
              technologies, I also did a freelance job while studying in
              college. My main focus now is to keep widening my knowledge by
              learning the cutting-edge technology and applying it by developing
              a meaningful application.
            </p>
            <p className='w-full font-montserrat text-base mb-4 text-gray-300'>
              Recently I was interested in learning NLP, machine learning, and
              deep learning. I learned it for about a year or so and publish a{' '}
              <a
                href='https://www.sciencedirect.com/science/article/pii/S2405959521001375'
                target='_blank'
                rel='noreferrer'
                className='text-purple-500'
              >
                research article
              </a>{' '}
              that uses deep learning methods.
            </p>
            <p className='w-full font-montserrat text-base mb-4 text-gray-300 '>
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
        <div className='container pt-16 px-8 lg:pt-0 lg:px-16'>
          <SectionTitle>The Project that I&apos;ve Developed</SectionTitle>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1 lg:pr-8'>
              {projects.slice(0, Math.ceil(projects.length / 2)).map((v, i) => (
                <div
                  key={v.name}
                  data-aos='fade-up'
                  data-aos-delay={100 * (i + 1)}
                >
                  <ProjectItem {...v} />
                </div>
              ))}
            </div>
            <div className='flex-1 lg:mt-80 lg:pl-8'>
              {projects.slice(Math.ceil(projects.length / 2)).map((v, i) => (
                <div
                  key={v.name}
                  data-aos='fade-up'
                  data-aos-delay={100 * (i + 1)}
                >
                  <ProjectItem {...v} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id='publication'
        className='min-h-screen relative overflow-hidden flex items-center md:max-w-[calc(100%-80px)] md:ml-20'
      >
        <div className='container px-8 lg:px-16'>
          <SectionTitle>The Article that I&apos;ve Published</SectionTitle>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1 lg:pr-8'>
              {publications
                .slice(0, Math.ceil(publications.length / 2))
                .map((v, i) => (
                  <div
                    key={v.url}
                    data-aos='fade-up'
                    data-aos-delay={100 * (i + 1)}
                  >
                    <PublicationItem {...v} />
                  </div>
                ))}
            </div>
            <div className='flex-1 lg:pl-8'>
              {publications
                .slice(Math.ceil(publications.length / 2))
                .map((v, i) => (
                  <div
                    key={v.url}
                    data-aos='fade-up'
                    data-aos-delay={100 * (i + 1)}
                  >
                    <PublicationItem {...v} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id='contact'
        className='min-h-screen relative overflow-hidden flex items-center md:max-w-[calc(100%-80px)] md:ml-20'
        data-aos='fade-up'
        data-aos-delay={100}
      >
        <div className='container px-8 lg:px-16'>
          <h4 className='mb-8 text-5xl font-poppins font-bold text-center text-purple-500'>
            Get in Touch
          </h4>
          <p className='w-full mx-auto font-montserrat text-base text-center mb-8 text-gray-300 lg:w-1/2'>
            I&apos;m currently open for any opportunities as a software
            engineer. if you have any question or want to discuss about a
            project, just send me a message and I&apos;ll get back to you.
          </p>
          <div className='w-full flex flex-col items-center justify-center sm:flex-row'>
            <a
              href='mailto:sastrawanikadek@gmail.com'
              className='group relative overflow-hidden mb-4 mx-4 w-full rounded-md border-2 border-solid border-purple-500 py-2 px-6 sm:w-auto sm:mb-0 sm:inline-block'
            >
              <span className='absolute h-full w-full top-0 left-0 bg-purple-500 transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0' />
              <span className='relative flex items-center text-purple-500 text-lg font-bold transition duration-300 ease-in-out group-hover:text-white font-montserrat'>
                <HiOutlineMail className='h-8 w-8 mr-3' />
                Email
              </span>
            </a>
            <a
              href='https://linkedin.com/in/sastrawanikadek'
              target='_blank'
              rel='noreferrer'
              className='group relative overflow-hidden mb-4 mx-4 w-full rounded-md border-2 border-solid border-purple-500 py-2 px-6 sm:w-auto sm:mb-0 sm:inline-block'
            >
              <span className='absolute h-full w-full top-0 left-0 bg-purple-500 transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0' />
              <span className='relative flex items-center text-purple-500 text-lg font-bold transition duration-300 ease-in-out group-hover:text-white font-montserrat'>
                <AiOutlineLinkedin className='h-8 w-8 mr-3' />
                LinkedIn
              </span>
            </a>
            <a
              href='https://github.com/sastrawanikadek'
              target='_blank'
              rel='noreferrer'
              className='group relative overflow-hidden mx-4 w-full rounded-md border-2 border-solid border-purple-500 py-2 px-6 sm:w-auto sm:mb-0 sm:inline-block'
            >
              <span className='absolute h-full w-full top-0 left-0 bg-purple-500 transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0' />
              <span className='relative flex items-center text-purple-500 text-lg font-bold transition duration-300 ease-in-out group-hover:text-white font-montserrat'>
                <AiOutlineGithub className='h-8 w-8 mr-3' />
                Github
              </span>
            </a>
          </div>
        </div>
      </section>
      <footer className='relative overflow-hidden flex items-center mb-8 md:max-w-[calc(100%-80px)] md:ml-20'>
        <div
          data-aos='fade-up'
          data-aos-offset={0}
          data-aos-delay={100}
          className='container px-8 lg:px-16'
        >
          <p className='text-sm text-center text-gray-300 font-montserrat'>
            Developed by Kadek Sastrawan
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
