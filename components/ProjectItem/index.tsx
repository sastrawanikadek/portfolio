import Badge, { BadgeProps } from 'components/Badge';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export interface ProjectItemProps {
  projectURL?: string;
  repositoryURL?: string;
  imageURL?: string;
  name: string;
  year: number;
  descriptions: string[];
  techStacks: BadgeProps[];
}

const ProjectItem = ({
  projectURL,
  repositoryURL,
  imageURL,
  name,
  year,
  descriptions,
  techStacks,
}: ProjectItemProps) => {
  return (
    <div className='flex flex-col gap-6 mb-16'>
      {projectURL && imageURL ? (
        <a
          href={projectURL}
          target='_blank'
          rel='noreferrer'
          className='block relative h-80 w-full'
        >
          <Image
            src={imageURL}
            alt={name}
            className='rounded-md grayscale transition-all duration-500 hover:grayscale-0'
            fill
          />
        </a>
      ) : imageURL ? (
        <div className='relative h-80 w-full'>
          <Image
            src={imageURL}
            alt={name}
            className='rounded-md grayscale transition-all duration-500 hover:grayscale-0'
            fill
          />
        </div>
      ) : null}
      <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          {projectURL ? (
            <a
              href={projectURL}
              target='_blank'
              rel='noreferrer'
              className='text-2xl font-bold font-poppins transition duration-300 text-white hover:text-purple-500'
            >
              {name}
            </a>
          ) : (
            <h5 className='text-2xl font-bold font-poppins transition duration-300 text-white hover:text-purple-500'>
              {name}
            </h5>
          )}
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
        <p className='font-montserrat text-base font-medium text-gray-400'>
          {year}
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        {descriptions.map((description, index) => (
          <p
            key={index}
            className='w-full font-montserrat text-base text-gray-300 '
          >
            {description}
          </p>
        ))}
        <p className='w-full font-montserrat text-base text-gray-300 '>
          Here are some technologies used to develop this application:
        </p>
      </div>
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
