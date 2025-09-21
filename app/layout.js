import MainHeader from '@/components/main-header/Main-header';
import './globals.css';

export const metadata = {
  metadataBase: new URL('http://localhost:3000'), // adjust to production origin when deploying
  title: {
    default: 'NextLevel Food – Share & Discover Meals',
    template: '%s | NextLevel Food'
  },
  description:
    'Discover, cook and share delicious homemade meals with the NextLevel Food community – step‑by‑step instructions, images and inspiration.',
  keywords: [
    'recipes',
    'meals',
    'cooking',
    'food community',
    'home cooking',
    'sharing recipes',
    'NextLevel Food'
  ],
  authors: [{ name: 'NextLevel Food Community' }],
  creator: 'NextLevel Food',
  publisher: 'NextLevel Food',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'NextLevel Food – Share & Discover Meals',
    description:
      'Browse community submitted meals, share your own recipes and get inspired to cook something new today.',
    url: '/',
    siteName: 'NextLevel Food',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'NextLevel Food Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextLevel Food – Share & Discover Meals',
    description:
      'Discover and share tasty homemade meals with the community.',
    images: ['/logo.png'],
    creator: '@nextlevelfood'
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
