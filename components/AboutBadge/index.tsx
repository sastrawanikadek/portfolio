import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface AboutBadgeProps {
  url: string;
  backgroundColor: string;
  textColor: string;
  icon: ReactNode;
  name: string;
}

const AboutBadge: FC<AboutBadgeProps> = ({
  url,
  backgroundColor,
  textColor,
  icon,
  name,
}) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='mr-2 mb-2'>
      <div
        className={clsx(
          'flex items-center p-1 rounded-md',
          backgroundColor,
          textColor
        )}
      >
        {icon}
        <span className='ml-[6px] text-sm font-poppins'>{name}</span>
      </div>
    </a>
  );
};

export default AboutBadge;
