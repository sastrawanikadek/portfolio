import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html
      lang='en'
      className='dark text-[12px] sm:text-[16px] scrollbar scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-700 scrollbar-thumb-rounded-full'
    >
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
