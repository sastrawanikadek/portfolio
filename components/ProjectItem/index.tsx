import Badge, { BadgeProps } from 'components/Badge';
import Image from 'next/image';
import React, { FC } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export interface ProjectItemProps {
  projectURL?: string;
  repositoryURL?: string;
  imageURL: string;
  name: string;
  description: string;
  techStacks: BadgeProps[];
}

const ProjectItem: FC<ProjectItemProps> = ({
  projectURL,
  repositoryURL,
  imageURL,
  name,
  description,
  techStacks,
}) => {
  return (
    <div className='mb-8'>
      {projectURL ? (
        <a
          href={projectURL}
          target='_blank'
          rel='noreferrer'
          className='block relative h-80 w-full'
        >
          <Image
            src={imageURL}
            alt={name}
            layout='fill'
            className='rounded-md grayscale transition-all duration-500 hover:grayscale-0'
          />
        </a>
      ) : (
        <div className='relative h-80 w-full'>
          <Image
            src={imageURL}
            alt={name}
            layout='fill'
            className='rounded-md grayscale transition-all duration-500 hover:grayscale-0'
          />
        </div>
      )}
      <div className='flex items-center justify-between my-6'>
        {projectURL ? (
          <a
            href={projectURL}
            target='_blank'
            rel='noreferrer'
            className='text-2xl font-bold font-poppins transition duration-300 dark:text-white hover:text-purple-500'
          >
            {name}
          </a>
        ) : (
          <h5 className='text-2xl font-bold font-poppins transition duration-300 dark:text-white hover:text-purple-500'>
            {name}
          </h5>
        )}
        <div className='flex-1'></div>
        {repositoryURL && (
          <a
            href={repositoryURL}
            target='_blank'
            rel='noreferrer'
            className='ml-4'
          >
            <AiOutlineGithub className='h-8 w-8 transition duration-300 ease-in-out text-gray-500 hover:text-purple-500' />
          </a>
        )}
        {projectURL && (
          <a
            href={projectURL}
            target='_blank'
            rel='noreferrer'
            className='ml-4'
          >
            <FiExternalLink className='h-8 w-8 transition duration-300 ease-in-out text-gray-500 hover:text-purple-500' />
          </a>
        )}
      </div>
      <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
        {description}
      </p>
      <p className='w-full font-montserrat text-base text-gray-700 mb-4 dark:text-gray-300 '>
        Here are some technologies used to develop this application:
      </p>
      <div className='flex flex-wrap'>
        {techStacks
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((v) => (
            <div key={v.name} className='mr-2 mb-2'>
              <Badge {...v} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectItem;
