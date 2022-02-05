import React, { FC, useState, useEffect } from 'react';
import SectionIndicatorItem from 'components/SectionIndicatorItem';

interface SectionIndicatorProps {
  sectionIds: string[];
}

const SectionIndicator: FC<SectionIndicatorProps> = ({ sectionIds }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      let section = '';

      sectionIds.map((v) => {
        const el = document.getElementById(v);

        if (el) {
          const startY = el.offsetTop;
          const endY = startY + el.clientHeight;

          if (
            scrollY + innerHeight / 2 >= startY &&
            scrollY + innerHeight / 2 < endY
          ) {
            section = v;
          }
        }
      });

      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      {sectionIds.map((v, i) => (
        <SectionIndicatorItem
          key={v}
          sectionId={v}
          index={i}
          active={v == activeSection}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
