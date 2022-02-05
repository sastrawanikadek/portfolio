import React, { FC } from 'react';
import clsx from 'clsx';

interface SectionIndicatorItemProps {
  sectionId: string;
  index: number;
  active?: boolean;
}

const SectionIndicatorItem: FC<SectionIndicatorItemProps> = ({
  sectionId,
  index,
  active = false,
}) => {
  const handleClick = () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <button
      data-aos='zoom-in'
      data-aos-delay={100 * (index + 1)}
      className={clsx(
        active ? 'border-purple-500' : 'border-white ',
        'group relative overflow-hidden rounded-lg h-4 w-4 mb-2 border border-solid transition duration-300 ease-in-out hover:border-purple-500'
      )}
      onClick={handleClick}
    >
      <span
        className={clsx(
          active ? 'scale-110' : 'scale-0',
          'absolute left-0 top-0 w-full h-full rounded-lg bg-purple-500 transition duration-300 ease-in-out group-hover:scale-110'
        )}
      />
    </button>
  );
};

export default SectionIndicatorItem;
