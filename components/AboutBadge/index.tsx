import Badge, { BadgeProps } from 'components/Badge';

interface AboutBadgeProps extends BadgeProps {
  url: string;
}

const AboutBadge = ({ url, ...badgeProps }: AboutBadgeProps) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='mr-2 mb-2'>
      <Badge {...badgeProps} />
    </a>
  );
};

export default AboutBadge;
