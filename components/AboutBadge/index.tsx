import Badge, { BadgeProps } from 'components/Badge';
import React, { FC } from 'react';

interface AboutBadgeProps extends BadgeProps {
  url: string;
}

const AboutBadge: FC<AboutBadgeProps> = ({ url, ...badgeProps }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='mr-2 mb-2'>
      <Badge {...badgeProps} />
    </a>
  );
};

export default AboutBadge;
