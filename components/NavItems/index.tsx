import clsx from 'clsx';

interface NavItemsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sectionIds: string[];
  color?: string;
  textCase?: 'uppercase' | 'capitalize' | 'lowercase';
  isBold?: boolean;
}

const NavItems = ({
  sectionIds,
  color = 'text-white',
  textCase = 'uppercase',
  isBold = true,
  className,
  ...props
}: NavItemsProps) => {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {sectionIds.map((v, i) => (
        <li key={v} data-aos='zoom-in' data-aos-delay={100 * (i + 1)}>
          <button
            {...props}
            className={clsx(
              color,
              textCase,
              isBold && 'font-bold',
              'block p-3 sm:p-4 rounded-md transition duration-300 ease-in-out hover:text-purple-500 hover:bg-black hover:bg-opacity-10'
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
