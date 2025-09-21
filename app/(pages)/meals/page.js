import { Suspense } from 'react';

import MealsHeader from '@/components/meals/Meals-header';
import MealsGrid from '@/components/meals/Meals-grid';
import LoadingMeals from '@/app/(pages)/meals/Loading-meals';
import { getAllMeals } from '@/lib/meals';

import styles from './page.module.css';

export const metadata = {
  title: {
    default: 'All Meals'
  },
  description:
    'Browse, discover and share delicious home‑cooked meals: burgers, curry, dumplings, pizza, salads and more. Step‑by‑step instructions and community favorites.',
  keywords: [
    'meals',
    'recipes',
    'home cooking',
    'food community',
    'easy dinner ideas',
    'nextlevel food'
  ],
  alternates: { canonical: '/meals' },
  openGraph: {
    title: 'Explore Community Meals | NextLevel Food',
    description:
      'Discover and share tasty meals from the community: burgers, curry, dumplings, pizza, salads and more.',
    url: '/meals',
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
    title: 'Explore Community Meals | NextLevel Food',
    description:
      'Browse and share delicious community meals with step‑by‑step instructions.',
    images: ['/logo.png']
  },
  robots: {
    index: true,
    follow: true
  }
};

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
