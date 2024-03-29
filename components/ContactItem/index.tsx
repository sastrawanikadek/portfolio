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
      <h4 className='text-lg capitalize font-bold font-poppins text-white'>
        {type}
      </h4>
      <h4 className='text-base font-medium font-montserrat text-white'>
        {value}
      </h4>
    </div>
  );
};

export default ContactItem;
