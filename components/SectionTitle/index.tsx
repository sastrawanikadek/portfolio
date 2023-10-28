interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h4
      data-aos='fade-down'
      data-aos-delay={100}
      className='mb-8 text-3xl font-bold font-poppins flex items-center after:h-[1px] after:min-w-[40px] after:flex-1 after:ml-4 after:bg-slate-400 text-white'
    >
      {children}
    </h4>
  );
};

export default SectionTitle;
