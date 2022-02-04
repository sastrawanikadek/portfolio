import React, { FC } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const icons = {
  github: (
    <AiOutlineGithub className='h-8 w-8 transition duration-300 ease-in-out text-gray-500 hover:text-purple-500' />
  ),
  linkedin: (
    <AiOutlineLinkedin className='h-8 w-8 transition duration-300 ease-in-out text-gray-500 hover:text-purple-500' />
  ),
};

interface SocialMediaProps {
  type: 'github' | 'linkedin';
  name: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ type, name }) => {
  const urls = {
    github: `https://github.com/${name}`,
    linkedin: `https://www.linkedin.com/in/${name}`,
  };

  return (
    <a href={urls[type]} className='block mb-6'>
      {icons[type]}
    </a>
  );
};

export default SocialMedia;
