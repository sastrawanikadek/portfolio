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

const SocialMedia = ({ type, name }: SocialMediaProps) => {
  const urls = {
    github: `https://github.com/${name}`,
    linkedin: `https://linkedin.com/in/${name}`,
  };

  return (
    <a
      href={urls[type]}
      data-aos='zoom-in'
      data-aos-delay={100}
      data-aos-offset={0}
      className='block mb-6'
    >
      {icons[type]}
    </a>
  );
};

export default SocialMedia;
