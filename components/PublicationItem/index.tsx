import React, { FC } from 'react';
import Badge, { BadgeProps } from 'components/Badge';
import { VscCircleFilled } from 'react-icons/vsc';

export interface PublicationItemProps {
  url: string;
  title: string;
  description: string;
  date: string;
  publisher: string;
  techStacks: BadgeProps[];
}

const PublicationItem: FC<PublicationItemProps> = ({
  url,
  title,
  description,
  date,
  publisher,
  techStacks,
}) => {
  return (
    <a href={url} className='group'>
      <div className='bg-slate-700 rounded-md shadow-xl p-8'>
        <h5 className='text-lg mb-4 font-poppins font-medium transition duration-300 text-white group-hover:text-purple-500'>
          {title}
        </h5>
        <p className='w-full font-montserrat text-base mb-6 text-gray-300 '>
          {description}
        </p>
        <div className='flex flex-wrap mb-4'>
          {techStacks
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((v) => (
              <div key={v.name} className='mr-2 mb-2'>
                <Badge {...v} />
              </div>
            ))}
        </div>
        <div className='flex items-center text-white '>
          <span className='text-sm font-poppins'>{date}</span>
          <VscCircleFilled size={12} className='mx-2' />
          <span className='text-sm font-poppins'>Published on {publisher}</span>
        </div>
      </div>
    </a>
  );
};

export default PublicationItem;
