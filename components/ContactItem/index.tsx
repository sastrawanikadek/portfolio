import clsx from 'clsx';

interface ContactItemProps {
  type: 'email' | 'phone' | 'location';
  value: string;
}

const ContactItem = ({ type, value }: ContactItemProps) => {
  return (
    <div
      className={clsx(
        'mb-8',
        type === 'email' ? 'pr-5 lg:pr-8' : 'px-5 lg:px-8'
      )}
    >
      <span className='text-lg capitalize font-bold font-poppins text-white'>
        {type}
      </span>
      <p className='text-base font-medium font-montserrat text-white'>
        {value}
      </p>
    </div>
  );
};

export default ContactItem;
