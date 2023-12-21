import Head from 'next/head';
import { useRouter } from 'next/router';

import { openGraph } from '@/lib/helper';

const defaultMeta = {
  title: 'Aarti Itikirala',
  siteName: 'Aarti Itikirala',
  description: "Aarti Itikirala's portfolio, a fullstack expression!",
  url: 'https://aarti-showcase.vercel.app',
  type: 'website',
  robots: 'follow, index',
  image: 'data:image/png;base64,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',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  meta['image'] = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@JazaScript' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />

          <meta
            name='author'
            property='article:author'
            content='Aarti Itikirala'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];
