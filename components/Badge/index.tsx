import clsx from 'clsx';

export interface BadgeProps {
  backgroundColor: string;
  textColor: string;
  icon: React.ReactNode;
  name: string;
}

const Badge = ({ backgroundColor, textColor, icon, name }: BadgeProps) => {
  return (
    <div
      className={clsx(
        'flex items-center py-1 px-2 rounded-md shadow-md',
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
