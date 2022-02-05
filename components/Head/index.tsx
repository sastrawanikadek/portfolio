import React, { FC } from 'react';
import NextHead from 'next/head';

interface HeadProps {
  title: string;
  icon?: string;
  description?: string;
  type?: string;
  locale?: string;
  url?: string;
  image?: string;
}

const Head: FC<HeadProps> = ({
  children,
  title,
  icon = '/favicon.ico',
  description = '',
  type = 'website',
  locale = 'en_US',
  url = process.env.NEXT_PUBLIC_URL,
  image = icon,
}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' href={icon} />
      <link rel='canonical' href={url} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:locale' content={locale} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={image} />
      <meta property='og:description' content={description} />
      {children}
    </NextHead>
  );
};

export default Head;
