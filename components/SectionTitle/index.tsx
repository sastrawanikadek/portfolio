import React, { FC } from 'react';

const SectionTitle: FC = ({ children }) => {
  return (
    <h4 className='mb-8 text-3xl font-bold font-poppins flex items-center after:h-[1px] after:flex-1 after:bg-black after:ml-4 dark:after:bg-slate-400 dark:text-white'>
      {children}
    </h4>
  );
};

export default SectionTitle;
