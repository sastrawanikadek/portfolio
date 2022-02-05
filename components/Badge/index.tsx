import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

export interface BadgeProps {
  backgroundColor: string;
  textColor: string;
  icon: ReactNode;
  name: string;
}

const Badge: FC<BadgeProps> = ({ backgroundColor, textColor, icon, name }) => {
  return (
    <div
      className={clsx(
        'flex items-center p-1 rounded-md shadow-md',
        backgroundColor,
        textColor
      )}
    >
      {icon}
      <span className='ml-[6px] text-sm font-poppins'>{name}</span>
    </div>
  );
};

export default Badge;
