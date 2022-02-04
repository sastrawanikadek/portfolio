import React, { FC } from 'react';
import clsx from 'clsx';

interface NavItemsProps {
  sectionIds: string[];
  color?: string;
  textCase?: 'uppercase' | 'capitalize' | 'lowercase';
  isBold?: boolean;
}

const NavItems: FC<
  NavItemsProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  sectionIds,
  color = 'dark:text-white',
  textCase = 'uppercase',
  isBold = true,
  className,
  ...props
}) => {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {sectionIds.map((v) => (
        <li key={v}>
          <button
            {...props}
            className={clsx(
              color,
              textCase,
              isBold && 'font-bold',
              'block p-4 rounded-md transition duration-300 ease-in-out hover:text-purple-500 hover:bg-black hover:bg-opacity-10'
            )}
            onClick={() => handleClick(v)}
          >
            {v}
          </button>
        </li>
      ))}
    </>
  );
};

export default NavItems;
